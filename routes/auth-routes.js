const passport = require('passport');

module.exports = function(app) {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

  app.get('/api/logout', (req, res) => {
    if (req.user) {
      req.logout();
      res.send(`You have been logged out.`);
    } else {
      res.send('No authenticated user was found. Unable to logout.')
    }
    req.logout();
  });

  app.get('/api/current-user', (req, res) => {
    req.user ? res.send(req.user) : res.send(false);
  });
}