const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
  welltopid: { type: Number, required: true },
  wellname: { type: String, required: true },
  surface: { type: String, required: true },
  depth: { type: Number, required: true },
  remarks: String,
  date: { type: Date, default: Date.now }
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