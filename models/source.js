const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Source = mongoose.model("Source", sourceSchema);

module.exports = Source;