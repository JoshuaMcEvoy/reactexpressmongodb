const express = require('express');
// same as 'import express from 'express';' but need to use this for server side:

const app = express();

// generating routes
app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

//  getting port from heroku
const PORT = process.env.PORT || 5000

// listening for the PORT
app.listen(PORT);
