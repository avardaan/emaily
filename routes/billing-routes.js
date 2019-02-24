const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripe.secretKey);

module.exports = (app) => {
  
  app.post('/api/stripe', (req, res) => {

  });
}