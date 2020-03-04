const router = require("express").Router();
const welltopRoutes = require("./welltops");
const welltopincRoutes = require("./welltopsinc");

// Book routes
router.use("/welltops", welltopRoutes);
router.use("/welltopsinc", welltopincRoutes);

module.exports = router;
