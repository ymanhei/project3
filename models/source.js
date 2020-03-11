const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* const sourceSchema = new Schema({
  welltopid: { type: Number, required: true },
  wellname: { type: String, required: true },
  surface: { type: String, required: true },
  depth: { type: Number, required: true },
  remarks: String,
  date: { type: Date, default: Date.now }
}); */

const sourceSchema = new Schema({
  UBHI: { type: Number, required: true },
  BOREHOLE_NAME: { type: String, required: true },
  PICK_DEPTH: { type: Number, required: true },
  STRAT_UNIT_ID: { type: String, required: true },
  INTERP_ID: { type: String, required: true },
  MA_AGE: { type: Number, required: true },
  ROW_CHANGED_DATE: { type: String },
  MODIFIED_BY: { type: String, required: true },
  WELLTOPID: { type: Number, required: true },
  LONGTITUDE: { type: Number, required: true },
  LATITUDE: { type: Number, required: true }
});

/* const conn2 = mongoose2.createConnection(process.env.MONGODB_URI || "mongodb://localhost/wtSource");
conn2.on('open',()=>{
  console.log(conn2.name + " database connected")
})
conn2.on('error',()=>{
  console.log("error in connecting to database")
})*/

const Source = mongoose.model("Source", sourceSchema);

/* Source
  .find({})
  .then(data => {
    console.log("SOURCE:  " + data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });  */

module.exports = Source;