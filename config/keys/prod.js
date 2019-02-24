/* Production Keys */
module.exports = {
  googleOauth: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  mongoDB: {
    databaseUri: process.env.DATABASE_URI
  },
  cookieSession: {
    cookieKey: process.env.COOKIE_KEY
  },
  stripe: {
    publishableKeys: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKeys: process.env.STRIPE_SECRET_KEY
  }
}