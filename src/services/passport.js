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
      const {
        sub,
        name,
        given_name,
        family_name,
        picture,
        email
      } = profile._json;

      const userCreated = {
        googleId: sub,
        nomeCompleto: name,
        nome: given_name,
        sobrenome: family_name,
        email,
        picture
      };

      console.log(userCreated);

      done(null, userCreated);
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
      console.log(profile);
      done(null, profile);
    }
  )
);
