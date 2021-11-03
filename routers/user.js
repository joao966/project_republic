const express = require('express');

const controller = require('../controllers');
const { validateUser } = require('../middlewares');

const routerUser = express.Router();

routerUser.get('/', controller.getByName);
routerUser.post('/', validateUser, controller.posNewUser);

module.exports = routerUser;
