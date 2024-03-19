const express = require('express');
const userController = require('../controllers/userRouteController');
const fileUpload = require('../middleware/single-file-upload');

const router = express.Router();

router.post('/login', userController.login);

router.post('/signup', fileUpload.single('image'), userController.signup);

module.exports = router;

