const requireLogin = require('../middlewares/require-login');
const requireCredits = require('../middlewares/require-credits');
const sendMail = require('../services/mailer');

const Survey = require('mongoose').model('surveys');

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const recipientsArray = recipients.split();

    // create survey object from request body
    const survey = new Survey({
      title, subject, body,
      recipients: recipientsArray.map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
    // create mail object from request body
    const mail = {
      to: recipients,
      from: 'no-reply@emaily.com',
      subject,
      text: body
    }
    await sendMail(mail)
  });
}