const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* const welltopSchema = new Schema({
  welltopid: { type: Number, required: true },
  wellname: { type: String, required: true },
  surface: { type: String, required: true },
  depth: { type: Number, required: true },
  remarks: String,
  date: { type: Date, default: Date.now }
}); */

const welltopSchema = new Schema({
  UBHI: { type: Number, required: true },
  BOREHOLE_NAME: { type: String, required: true },
  PICK_DEPTH: { type: Number, required: true },
  STRAT_UNIT_ID: { type: String, required: true },
  INTERP_ID: { type: String, required: true },
  MA_AGE: { type: Number, required: true },
  ROW_CHANGED_DATE: { type: Date, default: Date.now },
  MODIFIED_BY: { type: String, required: true },
  WELLTOPID: { type: Number, required: true },
  LONGTITUDE: { type: Number, required: true },
  LATITUDE: { type: Number, required: true }
});

/* const conn1 = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/welltoplist");
conn1.on('open',()=>{
  console.log(conn1.name + " database connected")
})
conn1.on('error',()=>{
  console.log("error in connecting to database")
})*/
const Welltop = mongoose.model("Welltop", welltopSchema); 

/* Welltop
  .find({wellname: "Well E"})
  .then(data => {
    console.log("Welltop:  "+data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); */

module.exports = Welltop;
