const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/welltops"
router.route("/")
  .get(welltopsController.findInc)
  .post(welltopsController.create);

// Matches with "/api/welltops/:id"
router
  .route("/:id")
  .get(welltopsController.findByIdinc)
  .put(welltopsController.update)
  .delete(welltopsController.remove);

  router
  .route("/wid/:wid")
  .get(welltopsController.findBywIdinc)
  .put(welltopsController.findnUpdate);
module.exports = router;
