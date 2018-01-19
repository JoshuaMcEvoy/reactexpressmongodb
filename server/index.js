const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');


const app = express();

passport.use( new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);
  console.log("profile", profile);
}));

// ROUTES HANDLERS
// GoogleStrategy has an internal an internal identifier of 'google'
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
