const db = require("../models");
var Welltopids = [];
var incWelltopids = [];
console.log("Init: " + incWelltopids);

/* function pushtoWelltopids () {
//find all ids from welltop collection
Welltopids=[];
console.log("Welltopids1:       " + Welltopids);
db.Welltop.find({}).lean().exec(function(error, records) {
  records.forEach(function(record) {
  //console.log(record.welltopid);
  Welltopids.push(record.welltopid);
  console.log("Welltopids2:       " + Welltopids);
  });
  console.log("Welltopids2.5:       " + Welltopids);

});

} */



// Defining methods for the welltopsController
module.exports = {
  findInc: function(req, res) {
    var incWelltopids=[];
  var welltopobj =[];
  var welltopids =[];

  db.Welltop.find({}).lean().exec(function(error, records) {
    records.forEach(function(record) {
      welltopobj.push({welltopid: record.welltopid, depth: record.depth});
      welltopids.push(record.welltopid);
  });
  console.log("welltopids:       " + welltopids);
  console.log("incWelltopids2:       " + incWelltopids);
  

    db.Source.find({welltopid:welltopids}).lean().exec(function(error, rec) {
      rec.forEach(function(record) {
        welltopobj.forEach(function(recordobj) {
          if ((record.welltopid == recordobj.welltopid) && (parseInt(record.depth) !== parseInt(recordobj.depth))) {
            //console.log("Not Match: " + record.welltopid);
            incWelltopids.push(record.welltopid);
             console.log("incWelltopids1:       " + incWelltopids);
             //console.log(incWelltopids);
         }
        })
      })
       //console.log("record.welltopid:  " + rec.welltopid)
       console.log("incWelltopids3:       " + incWelltopids);
       //console.log(incWelltopids);
       db.Welltop.find({welltopid: { $in : incWelltopids }})
         .sort({ date: -1 })
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   });  
});


  },

  findMissing: function(req, res) {
    Welltopids=[];
  //console.log("Welltopids1:       " + Welltopids);
  db.Welltop.find({}).lean().exec(function(error, records) {
  records.forEach(function(record) {
  //console.log(record.welltopid);
  Welltopids.push(record.welltopid);
  //console.log("Welltopids2:       " + Welltopids);
  });
  //console.log("Welltopids2.5:       " + Welltopids);
  //console.log("Welltopids:       " + Welltopids);
  db.Source.find({welltopid: { $nin : Welltopids }})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});
    
  },
  findAll: function(req, res) {
    db.Welltop
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findallwelltops: function(req, res) {
    db.Welltop
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findallsources: function(req, res) {
    db.Source
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdinc: function(req, res) {
    db.Welltop
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBywIdinc: function(req, res) {
    db.Welltop
      .findOne({welltopid:req.params.wid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Source
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBywId: function(req, res) {
    db.Source
      .findOne({welltopid:req.params.wid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Welltop
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Welltop
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updatewid: function(req, res) {
    db.Welltop
      .findOneAndUpdate({ welltopid: req.params.wid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Welltop
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
