const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripe.secretKey);
const requireLogin = require('../middlewares/require-login');

module.exports = (app) => {
  
  app.post('/api/stripe', requireLogin, async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Purchase 5 emaily credits',
      source: req.body.id,
    });
    req.user.credits += 5;
    const { credits } = await req.user.save();

    res.send({ credits });
  });
}