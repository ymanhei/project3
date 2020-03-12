const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/surfaces"
router.route("/")
  .get(welltopsController.finddistinctsurfaces)


module.exports = router;
