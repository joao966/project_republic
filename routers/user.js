const express = require('express');

const controller = require('../controllers');

const routerUser = express.Router();

routerUser.post('/', controller.posNewUser);


module.exports = routerUser;
