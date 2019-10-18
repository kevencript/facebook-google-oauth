const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const {
  googleClientID,
  googleClientSecret,
  facebookClientID,
  facebookClientSecret
} = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user);
});

//used to deserialize the user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// GOOGLE STRATEGY
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // getting data from the profile
      const { sub, name, picture, email } = profile._json;

      const user = {
        googleId: sub,
        nome: name,
        email,
        picture,
        provider: "google"
      };

      console.log(user);

      done(null, user);
    }
  )
);

// FACEBOOK STRATEGY
passport.use(
  new FacebookStrategy(
    {
      clientID: facebookClientID,
      clientSecret: facebookClientSecret,
      callbackURL: "/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      const { name, id } = profile._json;

      const user = {
        facebookId: id,
        nome: name,
        email: "",
        picture: "",
        provider: "facebook"
      };

      done(null, user);
    }
  )
);
