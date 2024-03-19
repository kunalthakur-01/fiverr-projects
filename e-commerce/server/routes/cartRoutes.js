const express = require('express');
const Router = express.Router();
const cartController = require('../controllers/cartRouteController');
// const checkAuth = require('../middleware/check-auth');

Router.get('/:uid', cartController.getCart);

// Router.use(checkAuth);

Router.post('/', cartController.addToCart);

Router.delete('/', cartController.deleteItemFromCart);

Router.patch('/', cartController.updateCart);

module.exports = Router;