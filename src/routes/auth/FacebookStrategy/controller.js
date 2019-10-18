/**
 * src/routes/auth/FacebookStrategy/controller.js
 *
 * @description: This file contain all the logic and interaction
 *
 */

const passport = require("passport");

// First authentication step
exports.login_facebook = passport.authenticate("facebook");

// Rota para o tratamento do callback
exports.callback_authenticate = passport.authenticate("facebook");

// Rota para retornar os dados do usuário após o callback
exports.callback_handler = (req, res) => {
  res.send(req.user);
};
