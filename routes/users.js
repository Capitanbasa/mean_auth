const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


//register route
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        username :req.body.username,
        password : req.body.password
    });
    User.addUser(newUser, (err, users) => {
        if(err){
            res.json({success : false, msg : 'Failed to Register User.'});
        }else{
            res.json({success : true, msg : 'Successfully Register User.'});
        }
    });
});

//auth route
router.post('/auth', (req, res, next) => {
    res.send('AUTHENTICATE');
});

 //Profile route
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});


 module.exports = router;