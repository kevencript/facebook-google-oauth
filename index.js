const express = require("express");
const Router = require("./src/routes/Router");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

require("./src/services/passport"); // PassportJs config

const app = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["asljdhaskj"]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", Router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
