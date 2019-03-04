const keys = require('../config/keys');
const redirectUrl = `${keys.sendgrid.redirectDomain}/api/surveys/thanks`
module.exports = (text) => {
  return `
    <html>
      <body>
        <div style="text-align:center">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${text}</p>
          <div>
            <a href="${redirectUrl}/">Yes</a>
          </div>
          <div>
            <a href="${redirectUrl}">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
}