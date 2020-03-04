const db = require("../models");
var Welltopids = [];
var incWelltopids = [];

//find all ids from welltop collection
db.Welltop.find({}).lean().exec(function(error, records) {
  records.forEach(function(record) {
  //console.log(record.welltopid);
  Welltopids.push(record.welltopid);
  });
});

db.Welltop.find({}).lean().exec(function(error, records) {
  records.forEach(function(record) {
 db.Source.findOne({welltopid:record.welltopid}).lean().exec(function(error, rec) {
 //console.log(rec.depth + "     " + record.depth)
  
    if (parseInt(rec.depth) !== parseInt(record.depth)) {
      //console.log("Not Match: " + record.welltopid);
    incWelltopids.push(record.welltopid);
    //console.log(incWelltopids);
    }
  
});

});

});
// Defining methods for the welltopsController
module.exports = {
  findInc: function(req, res) {
    console.log(incWelltopids);
    db.Welltop.find({welltopid: { $in : incWelltopids }})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMissing: function(req, res) {
    db.Source.find({welltopid: { $nin : Welltopids }})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Welltop
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
  remove: function(req, res) {
    db.Welltop
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
