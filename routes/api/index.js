const router = require("express").Router();
const welltopRoutes = require("./welltops");
const welltopincRoutes = require("./welltopsinc");
const totalRoutes = require("./total");
const surfacesroutes = require("./surfaces");
const usersroutes = require("./users");

// Book routes
router.use("/welltops", welltopRoutes);
router.use("/welltopsinc", welltopincRoutes);
router.use("/all", totalRoutes);
router.use("/surfaces", surfacesroutes);
router.use("/users", usersroutes);

module.exports = router;
