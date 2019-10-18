/**
 * routes/authRoutes/authRouter.js
 *
 * @description: This file contain all the routes for authentication handle
 *
 */

const express = require("express");
const router = express.Router();

// modules import
const googleStrategyRoutes = require("./GoogleStrategy");
const facebookStrategyRoutes = require("./FacebookStrategy");

// Routing
router.use("/google", googleStrategyRoutes);
router.use("/facebook", facebookStrategyRoutes);

module.exports = router;
