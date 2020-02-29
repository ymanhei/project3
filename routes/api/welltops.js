const router = require("express").Router();
const welltopsController = require("../../controllers/welltopsController");

// Matches with "/api/books"
router.route("/")
  .get(welltopsController.findAll)
  .post(welltopsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(welltopsController.findById)
  .put(welltopsController.update)
  .delete(welltopsController.remove);

module.exports = router;
