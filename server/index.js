const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys.js');


const app = express();

passport.use( new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}));

// ROUTES
app.get('/auth/google', (req, res) => {

});

//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
