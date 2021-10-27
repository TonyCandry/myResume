var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

var messagesModel = mongoose.model('messages', messageSchema);

module.exports = messagesModel