var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    age: Number,
    joined: { type: Date, default: Date.now },
    characters: [String],
    officer: Boolean,
    password: String
});

module.exports = mongoose.model('User', UserSchema);