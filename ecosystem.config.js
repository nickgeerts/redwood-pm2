const name = 'redwood-pm2'
const repo = 'git@github.com:njjkgeerts/redwood-pm2.git'
const path = `/home/deploy/${name}`
const user = 'deploy'
const host = 'nickgeerts.com'
const port = 8911

module.exports = {
  apps: [
    {
      name,
      'node-args': '-r dotenv/config',
      script: 'node_modules/@redwoodjs/api-server/dist/index.js',
      args: `-f api/dist/functions --port ${port}`,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user,
      host,
      ref: 'origin/master',
      repo,
      path,
      ssh_options: 'ForwardAgent=yes',
      'post-deploy':
        'yarn install && yarn rw build && yarn rw db up && yarn rw db seed && pm2 reload --env production',
    },
  },
}
