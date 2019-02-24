const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripe.secretKey);

module.exports = (app) => {
  
  app.post('/api/stripe', async (req, res) => {
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Purchase 5 emaily credits',
      source: req.body.id,
    });
    req.user.credits += 5;
    const user = await req.user.save();
    const { credits } = user;

    res.send({ credits });
  });
}