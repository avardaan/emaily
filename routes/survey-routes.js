const requireLogin = require('../middlewares/require-login');
const requireCredits = require('../middlewares/require-credits');
const sendMail = require('../services/mailer');

const Survey = require('mongoose').model('surveys');

module.exports = (app) => {
  
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for responding! :)');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  })

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
    try {
      // send emails using sendgrid helper
      await sendMail(mail);
      // save survey document to db
      await survey.save();
      // deduct credits
      req.user.credits -= 1;
      const { credits } = await req.user.save();
      // send back updated credits
      res.send({ credits });
    } catch (err) {
      res.status(422).send(err);
    }
    
  });
}