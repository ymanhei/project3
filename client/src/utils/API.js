import axios from "axios";

export default {
  // Gets all welltops
  getWelltops: function() {
    return axios.get("/api/welltops");
  },
  // Gets the Welltop with the given id
  getWelltop: function(id) {
    return axios.get("/api/welltops/" + id);
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
