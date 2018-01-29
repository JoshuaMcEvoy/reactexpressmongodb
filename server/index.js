const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// tells express that we need to use cookies
app.use(
  cookieSession({
    // 30days until it expires
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // encrypts cookie
    keys: [ keys.cookieKey ]
  })
);
// initialize and start a new session
app.use(passport.initialize());
app.use(passport.session());

// returning a function then calling the next function.
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
