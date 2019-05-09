const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Posts schema
<<<<<<< HEAD
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
=======
const UserSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "member"
>>>>>>> master
    }
  ],
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
