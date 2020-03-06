const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

  router
  .route("/welltops")
  .get(welltopsController.findallwelltops);

  router
  .route("/sources")
  .get(welltopsController.findallsources);

module.exports = router;
