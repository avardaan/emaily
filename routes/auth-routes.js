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
    passport.authenticate('google'),
    (req, res) => {
      /* redirect method redirects client to the specified route */
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    if (req.user) {
      req.logout();
      res.redirect('/');
    }
      
  });

  app.get('/api/current-user', (req, res) => {
    req.user ? res.send(req.user) : res.send(false);
  });
}