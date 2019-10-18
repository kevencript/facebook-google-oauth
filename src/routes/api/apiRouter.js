/**
 * routes/apiRoutes/apiRouter.js
 *
 * @description: This file contain all the routes for API requests e responses
 *
 */

const express = require("express");
const router = express.Router();

// modules import
const userRoutes = require("./user");

// Routing
router.use("/user", userRoutes);

module.exports = router;
