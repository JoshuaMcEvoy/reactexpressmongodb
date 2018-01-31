const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      // take the list of email address, split it into an array, and return an object for every email address with the property of email and the value of the actual email address.
      // recipients: recipients.split(',').map(email => ({ email })),
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSend: Date.new()
    });

    // sending the emails
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();

  });
};
