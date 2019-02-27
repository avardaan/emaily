const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoDB.databaseUri, { useNewUrlParser: true });
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    // 30 days in ms
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieSession.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Authentication Route Handlers
require('./routes/auth-routes')(app);
require('./routes/billing-routes')(app);
require('./routes/survey-routes')(app);

if (process.env.NODE_ENV === 'production') {
  // express will serve up client production assets
  app.use(express.static('client/build'));
  // express will serve up index.html if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on Port ${PORT}...`));