var mongoose = require('mongoose');

var barSchema = mongoose.Schema({
  name: {type:String, required:'{PATH} is required!'},
  stations: [String],
  mapurl: {type:String}
});
barSchema.virtual('nearby.stations').get(function() {
  var stationList = '';
  for (station of this.stations) {
    stationList += station;
    stationList += ', ';
  }
})

var Bar = mongoose.model('Bar', barSchema);

function createDefaultBars() {
  Bar.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Bar.create({name: 'Adagio', stations: ['Ningyocho']});
      Bar.create({name: 'Aldgate', stations: ['Shibuya']});
      Bar.create({name: 'Bankan', stations: ['Koenji']});
      Bar.create({name: 'Arrows British Pub', stations: ['Keiseifunabashi', 'Funabashi']});
    }
  })
}

exports.createDefaultBars = createDefaultBars;
