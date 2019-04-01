const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

// set cookie here
passport.serializeUser((user, done) => {
  // user.id here is the database id of the user in mongo
  done(null, user.id);
});

// retrieve user from cookie here
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleOauth.clientID,
      clientSecret: keys.googleOauth.clientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    // callback is run after passport receives code from google (once the user allows),
    // and uses it to fetch an access token
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        console.warn('The user you are trying to create already exists');
        done(null, existingUser);
      } else {
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
