const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/userpw"
router.route("/")
  .get(welltopsController.getuserpw)


module.exports = router;