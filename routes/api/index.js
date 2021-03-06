const router = require("express").Router();
const welltopRoutes = require("./welltops");
const welltopincRoutes = require("./welltopsinc");
const totalRoutes = require("./total");
const surfacesroutes = require("./surfaces");
const usersroutes = require("./users");
const boreholesroutes = require("./boreholes");
const userpwroutes = require("./userpw");

// all routes
router.use("/welltops", welltopRoutes);
router.use("/welltopsinc", welltopincRoutes);
router.use("/all", totalRoutes);
router.use("/surfaces", surfacesroutes);
router.use("/users", usersroutes);
router.use("/boreholes", boreholesroutes);
router.use("/userpw", userpwroutes);

module.exports = router;
