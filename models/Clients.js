const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    }, 
    dateOfBirth: {
        type: String,
        required: true
    },
    passportExpiryDate: {
        type: String,
        required: true
    },
    passportNumber: {
        type: String,
        required: true
    },
    extras: {
        type: String,
        
    }
});

module.exports = Client = mongoose.model('client', ClientSchema);