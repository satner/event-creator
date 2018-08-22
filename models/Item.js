const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true 
    },
    "total-participation": {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    "date-start": {
        type: String,
        required: true
    },
    "date-end": {
        type: String,
        required: true
    },
    "contact-phone": {
        type: String,
        required: true
    },
    hotel: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    extras: {
        type: String
    },
    mustHave: {
        type: String
    },
    activities: {
        type: Array,
        required: true
    },
    fileBrowserImage: {
        type: String,
        required: true
    },
    subscribers: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = Item = mongoose.model('item', ItemSchema);