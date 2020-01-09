const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are on posts now');
});

router.get('/specific', (req, res) => {
    res.send('the specific post');
});



module.exports = router;