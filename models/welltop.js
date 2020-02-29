const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const welltopSchema = new Schema({
  wellname: { type: String, required: true },
  surface: { type: String, required: true },
  depth: { type: Number, required: true },
  remarks: String,
  date: { type: Date, default: Date.now }
});

const Welltop = mongoose.model("Welltop", welltopSchema);

module.exports = Welltop;
