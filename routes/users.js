const express = require('express');
const router = express.Router();

//register route
router.post('/register', (req, res, next) => {
    res.send('RESGISTER');
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