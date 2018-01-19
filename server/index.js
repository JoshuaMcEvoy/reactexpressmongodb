const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:
require('./services/passport.js');

const app = express();

// returning a function then calling the next function.
require('./routes/authRoutes')(app);


//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
