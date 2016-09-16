module.exports = function(app) {

  var bars = require('../controllers/bars');

  app.get('/api/bars', bars.getBars);
}
