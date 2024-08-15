const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('User', userSchema);