# Redwood.js serverfull hosting with PM2

This is an example of serverfull hosting of a Redwood.js app with PM2 and Nginx.

## Requirements

- Linux server
- Nginx
- Postgres
- PM2
- Node
- Yarn

## Configuration

### Linux server

Your server should have a user for deploying the app with. It should be configured with a SSH key pair so you can easily SSH into it from your development environment. In this example this user is named `deploy`.

### Nginx

Your Nginx configuration file for the app should look something like this. Typically, this file would be stored at `/etc/nginx/sites-available/redwood-pm2` and is symbolically linked to `/etc/nginx/sites-enabled/redwood-pm2`.

Please note that the trailing slash in the proxy_pass value is essental to correctly map the API functions.

```
server {
  server_name redwood-pm2.example.com;
  listen 80;

  location / {
    root /home/deploy/redwood-pm2/current/web/dist;
  }

  location /api/ {
    proxy_pass http://localhost:8911/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

### PM2

The ecosystem.config.js file is used for PM2 settings. The most important variables are at the top. Note that the port is only used locally on the server and should match the port in the Nginx config.

```javascript
const name = 'redwood-pm2' // Name to use in PM2
const repo = 'git@github.com:njjkgeerts/redwood-pm2.git' // Link to your repo
const user = 'deploy' // Server user
const path = `/home/${user}/${name}` // Path on the server to deploy to
const host = 'example.com' // Server hostname
const port = 8911 // Port to use locally on the server
```

## Deploying

### Preparation

First, we need to create the directories for PM2.

```
yarn install
yarn deploy:setup
```

Your directories at the server are now set. However, your `.env` settings are not yet configured. SSH into your server and create an `.env` file in the `current` subdirectory of the deploy directory.

```
vim /home/deploy/redwood-pm2/current/.env
```

In the example we only need an DATABASE_URL variable.

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/redwood-pm2
```

Now we can finally deploy the app.

### Actual deploy

Just run the following. It should update the code, take care of database migrations and restart the app in PM2.

```
yarn deploy
```

Enjoy! 😁

## Add PM2 to your existing project

First we need to add the Redwood.js API server and PM2 NPMs to the API workspace.

```
yarn workspace api add @redwoodjs/api-server
yarn workspace api add -D pm2
```

Create a PM2 config file.

```
yarn pm2 init
```

Edit redwood.toml to change the API endpoint:

```
apiProxyPath = "/api"
```

Optionally add some scripts to your top-level package.json.

```
"scripts": {
  "deploy:setup": "pm2 deploy production setup",
  "deploy": "pm2 deploy production deploy"
}
```