const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/user"
router.route("/")
  .get(welltopsController.finddistinctusers)


module.exports = router;