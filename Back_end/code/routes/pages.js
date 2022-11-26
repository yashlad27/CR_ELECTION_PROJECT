var express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/mainpage', (req, res) => {
    res.render("Front_end/code/card.html");
})
module.exports = router;