const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const secrets = require('./config/secrets');

require('./models/User');
require('./services/passport');

mongoose.connect(secrets.mongoDB.databaseUri, { useNewUrlParser: true });
const app = express();

app.use(
  cookieSession({
    // 30 days in ms
    maxAge: 30*24*60*60*1000,
    keys: [secrets.cookieSession.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Authentication Route Handlers
require('./routes/auth-routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on Port ${PORT}...`));