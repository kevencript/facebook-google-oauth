/**
 * src/routes/auth/FacebookStrategy/index.js
 *
 * @description: This file contains all the requisitions for FacebookOAuth20
 */

const express = require("express");
const router = express.Router();

// controller import
const controller = require("./controller");

// @desc     redirecting user for facebook servers to grant permissions to access his informations
// @route    GET /auth/facebook
// @acess    Public
router.get("/", controller.login_facebook);

// @desc     Handle the callback sended by google with permission code to access user informations
// @route    GET /auth/facebook/callback
// @acess    Public
router.get(
  "/callback",
  controller.callback_authenticate,
  controller.callback_handler
);

module.exports = router;
