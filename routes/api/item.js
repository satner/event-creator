const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }  
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

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

// @route GET api/items/:id
// @desc Get specific id item
router.get('/:id', (req, res) => {
    Item.findOne({_id: req.params.id}).then(item => res.json(item));

});

// @route POST api/items
// @desc Create an item
router.post('/', upload.single('fileBrowserImage'), (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        email: req.body.email,
        destination: req.body.destination,
        subscribers: req.body.subscribers,
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
        activities: req.body.activities,
        shortDescription: req.body.shortDescription,
        fileBrowserImage: req.file.path
     });
     newItem.save().then(item => res.json(item));
     
    if (!req.file) {
        console.log("No file received");
      } else {
        console.log('file received');
      }
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