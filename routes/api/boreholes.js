const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/boreholes"
router.route("/")
  .get(welltopsController.finddistinctbh)


module.exports = router;