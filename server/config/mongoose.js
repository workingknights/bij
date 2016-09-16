var mongoose = require('mongoose'),
    barModel = require('../models/Bar');

module.exports = function(config) {

  // var module = {};

  // Use native promises
  // mongoose.Promise = global.Promise;
  // assert.equal(query.exec().constructor, global.Promise);

  // connection = mongoose.createConnection(config.db);
  mongoose.connect(config.db);
  var db = mongoose.connection;

  // autoIncrement.initialize(connection);

  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('bij db opened');
  });

  barModel.createDefaultBars();
};
