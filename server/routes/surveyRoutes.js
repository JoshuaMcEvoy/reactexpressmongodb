const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // take the list of email address, split it into an array, and return an object for every email address with the property of email and the value of the actual email address.
      recipients: recipients.siple(',').map( email => ({ email }) ),
      _user: req.user.id,
      dateSend: Date.new()
    });
  });
};
