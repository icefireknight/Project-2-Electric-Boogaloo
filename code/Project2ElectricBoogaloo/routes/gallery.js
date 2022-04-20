var router = require('express').Router();
const passport = require('passport');
const photosCtrl = require('../controllers/photos');

router.get('/', photosCtrl.index);
router.get('/new', photosCtrl.new);
router.post('/', photosCtrl.create);

module.exports = router;