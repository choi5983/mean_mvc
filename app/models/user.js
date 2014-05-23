var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name:  String,
  email: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

UserSchema.path('name').required(true, 'User name cannot be blank');
UserSchema.path('email').required(true, 'User email cannot be blank');

mongoose.model('User', UserSchema);
