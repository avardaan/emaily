const keys = require('../config/keys');
module.exports = (text, surveyId) => {
  const redirectUrl = `${keys.sendgrid.redirectDomain}/api/surveys/${surveyId}`
  return `
    <html>
      <body>
        <div style="text-align:center">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${text}</p>
          <div>
            <a href="${redirectUrl}/yes">Yes</a>
          </div>
          <div>
            <a href="${redirectUrl}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
}