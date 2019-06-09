const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');


// or 
var util = require('util');

//retrieving data 
router.get('/contacts', (req, res, next) => {    
    Contact.find(function (err, contacts) {
        res.json(contacts);
    });
});

// add contact
router.post('/contacts', (req, res, next) => {    
    let newContact = new Contact({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    });
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:"Failed to add contact"});
        }else{
            res.json({msg:"Contact has been added succcessfully"});
        }
    });
});

// delete contact
router.delete('/contacts/:id', (req, res, next) => {      
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json({ msg: 'Failed to delete contact' });
        } else {
            res.json({ msg: 'Contact has been successfully deleted' });
        }
    });
});

module.exports = router;