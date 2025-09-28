module.exports = {
    apps: [
      {
        name: '%%APP_NAME%%',
        port: '%%PORT%%',
        exec_mode: 'cluster',
        instances: 'max',
        script: './server/index.mjs'
      }
    ]
  }