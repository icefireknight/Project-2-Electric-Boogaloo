var router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
    res.render('gallery');
});

module.exports = router;