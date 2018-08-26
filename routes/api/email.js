const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
 
router.post('/', function(req, res, next) {
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "YOUR-EMAIL",
            pass: "YOUR-PASS" 
        }
    });

    let mailOptions = {
        from: '"Word party traveller 👻"', // sender address
        to: req.body.receiver, // list of receivers
        subject: 'Trip schedule', 
        text: 'Hello world?', 
        html: req.body.data
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    
})

module.exports = router;