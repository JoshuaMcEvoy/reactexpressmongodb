const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

// 'user' comes from the returned object in the promise (.then) from existingUser and user.
passport.serializeUser((user, done) => {
  console.log(user.id);
  done(null, user.id);
});

// id is the token we go back from user.id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    // 'existingUser' gets passed to serializeUser
    const existingUser = await User.findOne({ googleId: profile.id })

    if (existingUser){
      done(null, existingUser);
    }
      // 'user' gets passed to serializeUser
      const user = await new User({ googleId: profile.id }).save()
      done(null, user);
    }
  )
);
