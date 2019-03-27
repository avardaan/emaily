const requireLogin = require('../middlewares/require-login');
const requireCredits = require('../middlewares/require-credits');
const sendMail = require('../services/mailer');
const _ = require('lodash');
const Path = require('path-parser').default;
const URL = require('url').URL;

const Survey = require('mongoose').model('surveys');

module.exports = (app) => {
  
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for responding! :)');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const pathParser = new Path('/api/surveys/:surveyId/:choice');

    // extract relevant information
    const mapHelper = (event) => {
      // if pathParser is not able to extract both surveyId AND choice from path, it returns null
      const match = pathParser.test(new URL(event.url).pathname);
      if (match) {
        return {
          email: event.email,
          ...match // surveyId and choice
        };
      }
    }

    const events = _.chain(req.body)
    .map(mapHelper)
    .compact()
    .uniqBy('email', 'surveyId')
    .value();

    
    // remove undefined and duplicates
    console.log(events);
    res.send({});
  });

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
      text: body,
      surveyId: survey.id
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