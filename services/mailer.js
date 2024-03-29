const sendgridMail = require('@sendgrid/mail');
const emailTemplate = require('./email-template');
const keys = require('../config/keys');

async function sendMail(mail) {
  sendgridMail.setApiKey(keys.sendgrid.apiKey);
  const message = {
    ...mail,
    html: emailTemplate(mail.text, mail.surveyId)
  }
  await sendgridMail.send(message);
}

module.exports = sendMail;  