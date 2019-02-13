const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const secrets = require('../config/secrets');
const mongoose = require('mongoose');

const User = mongoose.model('users');

// set cookie here
passport.serializeUser((user, done) => {
  // user.id here is the database id of the user in mongo
  done(null, user.id);
});

// retrieve user from cookie here
passport.deserializeUser((id, done) => {
  User.findById(id)
  .then((user) => {
    done(null, user);
  })
});

passport.use(
  new GoogleStrategy(
  {
    clientID: secrets.googleOauth.clientID,
    clientSecret: secrets.googleOauth.clientSecret,
    callbackURL: '/auth/google/callback'
  },
  // callback is run after passport receives code from google (once the user allows),
  // and uses it to fetch an access token
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        console.log('The user you are trying to create already exists');
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id })
        .save()
        .then((newUser) => done(null, newUser))

      }
    })
  }
  )
);