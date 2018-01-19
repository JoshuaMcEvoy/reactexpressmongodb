const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// returning a function then calling the next function.
require('./routes/authRoutes')(app);


//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
