const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use( new GoogleStrategy() );

// ROUTES
app.get('/auth/google', (req, res) => {

});

//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
