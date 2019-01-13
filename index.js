const express = require('express');
// passportJS configuration
require('./services/passport');
const app = express();

// Authentication Route Handlers
require('./routes/auth-routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);