const router = require("express").Router();
const welltopRoutes = require("./welltops");
const welltopincRoutes = require("./welltopsinc");
const totalRoutes = require("./total");

// Book routes
router.use("/welltops", welltopRoutes);
router.use("/welltopsinc", welltopincRoutes);
router.use("/all", totalRoutes);

module.exports = router;
