const db = require("../models");
var Welltopids = [];

// Defining methods for the welltopsController
module.exports = {
  findInc: function(req, res) {
    var incWelltopids=[];
  var welltopobj =[];
  var welltopids =[];

  db.Welltop.find({}).lean().exec(function(error, records) {
    records.forEach(function(record) {
      welltopobj.push({WELLTOPID: record.WELLTOPID, PICK_DEPTH: record.PICK_DEPTH});
      welltopids.push(record.WELLTOPID);
  });
  
    db.Source.find({WELLTOPID:welltopids}).lean().exec(function(error, rec) {
      rec.forEach(function(record) {
        welltopobj.forEach(function(recordobj) {
          if ((record.WELLTOPID == recordobj.WELLTOPID) && (parseInt(record.PICK_DEPTH) !== parseInt(recordobj.PICK_DEPTH))) {
            incWelltopids.push(record.WELLTOPID);

         }
        })
      })

       db.Welltop.find({WELLTOPID: { $in : incWelltopids }})
         .sort({ date: -1 })
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   });  
});


  },

  findMissing: function(req, res) {
    Welltopids=[];
  db.Welltop.find({}).lean().exec(function(error, records) {
  records.forEach(function(record) {
  Welltopids.push(record.WELLTOPID);
  });
  db.Source.find({WELLTOPID: { $nin : Welltopids }})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});
    
  },
  finddistinctsurfaces: function(req, res) {
    const aggregatorOpts = [{
      $group: {
        _id: "$STRAT_UNIT_ID",
        count: { $sum: 1 }
      }
    }]
    db.Welltop.aggregate(aggregatorOpts)
    .exec()
    .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  finddistinctusers: function(req, res) {
    const aggregatorOpts = [{
      $group: {
        _id: "$MODIFIED_BY",
        count: { $sum: 1 }
      }
    }]
    db.Welltop.aggregate(aggregatorOpts)
    .exec()
    .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  finddistinctbh: function(req, res) {
    const aggregatorOpts = [{
      $group: {
        _id: {LATITUDE: "$LATITUDE",LONGTITUDE:"$LONGTITUDE",BOREHOLE_NAME: "$BOREHOLE_NAME"},
        count: { $sum: 1 }
      }
    }]
    db.Welltop.aggregate(aggregatorOpts)
    .exec()
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
      .findOne({WELLTOPID:req.params.wid})
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
      .findOne({WELLTOPID:req.params.wid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findnUpdate: function(req, res) {
    db.Source.findOne({WELLTOPID:req.params.wid}).lean().exec(function(error, rec) {
       db.Welltop.findOneAndUpdate({WELLTOPID: rec.WELLTOPID},{PICK_DEPTH: rec.PICK_DEPTH})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   });  
  },
  create: function(req, res) {
    console.log(req.body);
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
      .findOneAndUpdate({ WELLTOPID: req.params.wid }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Welltop
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getuserpw: function(req, res) {
    db.User
      .findOne({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
