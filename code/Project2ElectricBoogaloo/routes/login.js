var router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
    res.render('login');
});



module.exports = router;