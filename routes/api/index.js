const router = require("express").Router();
const welltopRoutes = require("./welltops");

// Book routes
router.use("/welltops", welltopRoutes);

module.exports = router;
