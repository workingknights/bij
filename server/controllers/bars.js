var Bar = require('mongoose').model('Bar');

exports.getBars = function(req, res) {
    // res.send({data: [
    //   {id: 1, name: 'Adagio', stations: 'Ningyocho'},
    //   {id: 2, name: 'Aldgate', stations: 'Shibuya'},
    //   {id: 3, name: 'Bankan', stations: 'Koenji'}
    // ]});
    Bar.find({}).exec(function(err, collection) {
      res.send(collection);
    })
};

exports.getBarByName = function(req, res) {
  var name = req.params.name;
  console.log('getBarByName() name = ' + name);
    Bar.find({name: new RegExp('^'+name, "i")}).exec(function(err, collection) {
      console.log(collection);
      res.send(collection);
    })
}

exports.add = function(req, res) {
  console.log('createBar() req = ' + req);
  var name = req.body.name;
  console.log('createBar() name = ' + name);

  var newBar = new Bar({ name: name });
  newBar.save(function(err) {
    if (err) {
      res.status(400); return res.send({reason: err.toString()});
    }
    else {
      console.log('newBar = ' + newBar);
      res.json(newBar);
    }
  })
}
