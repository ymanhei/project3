import axios from "axios";

export default {
  // Gets all welltops
  getWelltopsinc: function() {
    return axios.get("/api/welltopsinc");
  },
  getWelltopinc: function(id) {
    return axios.get("/api/welltopsinc/" + id);
  },
  getWelltopincwid: function(wid) {
    return axios.get("/api/welltops/wid/" + wid);
  },
  updateWelltop: function(wid,welltopdata) {
    return axios.put("/api/welltops/wid/" + wid,welltopdata);
  },
  // Gets missing welltops
  getWelltops: function() {
    return axios.get("/api/welltops");
  },
   // Gets all welltops
   getallwelltops: function() {
    return axios.get("/api/all/welltops");
  },
   // Gets all welltops
   getallsources: function() {
    return axios.get("/api/all/sources");
  },
  // Gets the Welltop with the given id
  getWelltop: function(id) {
    return axios.get("/api/welltops/" + id);
  },
  getWelltopwid: function(wid) {
    return axios.get("/api/welltopsinc/wid/" + wid);
  },
  // Deletes the Welltop with the given id
  deleteWelltop: function(id) {
    return axios.delete("/api/welltops/" + id);
  },
  // Saves a Welltop to the database
  saveWelltop: function(welltopData) {
    return axios.post("/api/welltops", welltopData);
  }
};
