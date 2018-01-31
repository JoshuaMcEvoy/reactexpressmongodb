const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema ({
  title: String,
  body: String,
  subject: String,
  // nested model - sub-document collection - documents are limited to 4mb
  recipients: [ RecipientSchema ],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // relationship to the User model
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
