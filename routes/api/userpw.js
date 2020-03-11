const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/welltops"
router.route("/")
  .get(welltopsController.getuserpw)


module.exports = router;