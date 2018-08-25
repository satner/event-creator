const express = require('express');
const router = express.Router();



// Client Model
const Client = require('../../models/Clients');

router.get('/', (req, res) => {
    Client.find()
        .then(items => res.json(items))
});

router.post('/', (req, res) => {
    const newClient = new Client({
        name: req.body.name,
        email: req.body.email,
        contactPhone: req.body.contactPhone,
        dateOfBirth: req.body.dateOfBirth,
        passportExpiryDate: req.body.passportExpiryDate,
        passportNumber: req.body.passportNumber,
        extras: req.body.extras,
        tripID : req.body.tripID,
        agent: req.body.agent, 
        destination: req.body.destination
     });
     newClient.save().then(client => res.json(client));

});

module.exports = router;