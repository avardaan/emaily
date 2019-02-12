const express = require('express');
const mongoose = require('mongoose');
const secrets = require('./config/secrets');
require('./models/User');
require('./services/passport');

mongoose.connect(secrets.mongoDB.databaseUri, { useNewUrlParser: true });
const app = express();

// Authentication Route Handlers
require('./routes/auth-routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Listening on Port ${PORT}...`));