const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const secrets = require('./secrets/secrets');

const app = express();

passport.use(
  new GoogleStrategy(
  {
    clientID: secrets.googleOauth.clientID,
    clientSecret: secrets.googleOauth.clientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile) => {
    console.log(accessToken, refreshToken, profile);
  }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('listening...'));