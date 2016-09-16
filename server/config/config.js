var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    env: 'development',
    db: 'mongodb://localhost/bij',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    env: 'production',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
