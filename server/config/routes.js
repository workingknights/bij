module.exports = function(app) {

  var bars = require('../controllers/bars');

  app.get('/api/bars', bars.getBars);
  app.get('/api/bars/name/:name', bars.getBarByName);
}
