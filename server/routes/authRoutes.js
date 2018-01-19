const passport = require('passport');

module.exports = (app) => {
  // ROUTES HANDLERS
  // GoogleStrategy has an internal an internal identifier of 'google'
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  // ability to get details on user when logged in.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
