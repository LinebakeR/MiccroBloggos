const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Posts schema
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
    }
});

module.exports = User = mongoose.model('user', UserSchema);