import axios from "axios";

export default {
  // Gets all welltops
  finddistinctsurfaces: function() {
    return axios.get("/api/surfaces");
  },
  finddistinctboreholes: function() {
    return axios.get("/api/boreholes");
  },
  finddistinctusers: function() {
    return axios.get("/api/users");
  },
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
  getuserpw: function() {
    return axios.get("/api/userpw");
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
  getWelltopswid: function(wid) {
    return axios.get("/api/welltops/wid/" + wid);
  },
  getWelltopwid: function(wid) {
    return axios.get("/api/welltopsinc/wid/" + wid);
  },
  updateWelltopinc: function(wid) {
    return axios.put("/api/welltopsinc/wid/" + wid);
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
