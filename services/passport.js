const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const secrets = require('../config/secrets');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
  {
    clientID: secrets.googleOauth.clientID,
    clientSecret: secrets.googleOauth.clientSecret,
    callbackURL: '/auth/google/callback'
  },
  // callback is run after passport receives code from google (once the user allows),
  // and uses it to fetch an access token
  (accessToken, refreshToken, profile) => {
    User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      !existingUser ? new User({ googleId: profile.id }).save() : console.log('The user you are trying to create already exists');
    })
  }
  )
);