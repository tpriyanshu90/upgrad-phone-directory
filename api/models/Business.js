const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
}, {
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);