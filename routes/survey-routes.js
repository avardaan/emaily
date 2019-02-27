const requireLogin = require('../middlewares/require-login');
const requireCredits = require('../middlewares/require-credits');

const Survey = require('mongoose').model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title, subject, body,
      recipients: recipients.split('').map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    })
  });
}