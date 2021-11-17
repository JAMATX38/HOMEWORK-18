const router = require("express").Router();

const homeyRoutes = require("./homeyRoutes");
const Workout = require("../models/Workout");
const apiRoutes = require('./api');


router.use('/', homeyRoutes);
router.use('/api', apiRoutes);


module.exports = router;