var router = require('express').Router();
const passport = require('passport');
const photosCtrl = require('../controllers/photos');
const isLoggedIn = require('../config/auth');

router.get('/', photosCtrl.index);
router.get('/new', isLoggedIn, photosCtrl.new);
router.post('/', photosCtrl.create);
router.delete('/:id', photosCtrl.delete);
router.put('/:id', photosCtrl.update);
router.get('/:id', photosCtrl.viewPhoto);

module.exports = router;