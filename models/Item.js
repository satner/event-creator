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
        
    },
    destination: {
        type: String
    },
    duration: {
        type: String,
       
    },
    "total-participation": {
        type: String,
       
    },
    price: {
        type: String,
        
    },
    "date-start": {
        type: String,
       
    },
    "date-end": {
        type: String,
       
    },
    "contact-phone": {
        type: String,
       
    },
    hotel: {
        type: String,
       
    },
    description: {
        type: String,
        
    },
    extras: {
        type: String,
        
    },
    mustHave: {
        type: String,
       
    },
    activities: {
        type: Array,
       
    },
    fileBrowserImage: {
        type: String
    },
    subscribers: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    } 
});

module.exports = Item = mongoose.model('item', ItemSchema);