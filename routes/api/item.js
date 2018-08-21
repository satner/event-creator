const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
router.get('/', (req, res) => {
    Item.find()
        .sort({
            date: -1
        })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create an item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        email: req.body.email,
        duration: req.body.duration,
        "total-participation": req.body["total-participation"],
        price: req.body.price,
        "date-start": req.body["date-start"],
        "date-end":req.body["date-end"],
        "contact-phone": req.body["contact-phone"],
        hotel: req.body.hotel,
        description: req.body.description,
        extras: req.body.extras,
        mustHave: req.body.mustHave,
        activities: req.body.activities
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete an item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({
            success: false
        }))
});

module.exports = router;