const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/welltoplist"
);

const welltopSeed = [
  {
    welltopid: 100001,
    wellname: 'Well A',
    surface: 'TR_1.0',
        depth: 250,
        remarks:
          'Remark 1',
        date: new Date(Date.now())
    },
    {
    welltopid: 100002,
    wellname: 'Well B',
    surface: 'TR_2.0',
        depth: 275,
        remarks:
          'Remark 2',
        date: new Date(Date.now())
    },
    {
      welltopid: 100003,
    wellname: 'Well C',
    surface: 'TR_3.0',
        depth: 300,
        remarks:
          'Remark 3',
        date: new Date(Date.now())
    },
    {
      welltopid: 100004,
    wellname: 'Well D',
    surface: 'TR_4.0',
        depth: 325,
        remarks:
          'Remark 4',
        date: new Date(Date.now())
    },
    {
      welltopid: 100005,
    wellname: 'Well E',
    surface: 'TR_5.0',
        depth: 350,
        remarks:
          'Remark 5',
        date: new Date(Date.now())
    },
  
];

const welltopSeed2 = [
  {
    welltopid: 100001,
    wellname: 'Well A',
    surface: 'TR_1.0',
        depth: 250,
        remarks:
          'Remark 1',
        date: new Date(Date.now())
    },
    {
      welltopid: 100002,
    wellname: 'Well B',
    surface: 'TR_2.0',
        depth: 275,
        remarks:
          'Remark 2',
        date: new Date(Date.now())
    },
    {
      welltopid: 100003,
    wellname: 'Well C',
    surface: 'TR_3.0',
        depth: 300,
        remarks:
          'Remark 3',
        date: new Date(Date.now())
    },
    {
      welltopid: 100004,
    wellname: 'Well D',
    surface: 'TR_4.0',
        depth: 325,
        remarks:
          'Remark 4',
        date: new Date(Date.now())
    },
    {
      welltopid: 100005,
    wellname: 'Well E',
    surface: 'TR_5.0',
        depth: 350,
        remarks:
          'Remark 5',
        date: new Date(Date.now())
    },
    {
      welltopid: 100006,
    wellname: 'Well F',
    surface: 'TR_6.0',
        depth: 375,
        remarks:
          'Remark 6',
        date: new Date(Date.now())
    }
    
    
];

db.Source
.remove({})
.then(() => db.Source.collection.insertMany(welltopSeed2))
.then(data => {
  console.log(data.result.n + " records inserted!");
  //process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

/* db.Welltop
  .remove({})
  .then(() => db.Welltop.collection.insertMany(welltopSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); */

