module.exports = {
  apps : [{
    name: 'linux-deploy-server',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '106.54.32.13',
      ref  : 'origin/master',
      repo : 'git@github.com:yangguanyong/linux-deploy-server.git',
      path : '/opt/code/first-demo/linux-deploy-server',
      'pre-setup': 'git pull',
      'post-deploy' : 'yarn && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
