const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/welltops"
router.route("/")
  .get(welltopsController.findMissing)
  .post(welltopsController.create);

// Matches with "/api/welltops/:id"
router
  .route("/:id")
  .get(welltopsController.findById)
  .put(welltopsController.update)
  .delete(welltopsController.remove);

  router
  .route("/wid/:wid")
  .get(welltopsController.findBywId)
  .put(welltopsController.updatewid);


module.exports = router;
