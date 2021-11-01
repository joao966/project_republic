require('dotenv').config();
const express = require('express');

const controller = require('../controllers');
const {validateLogin} = require('../middlewares/validateLogin');
const routerLogin = express.Router();

routerLogin.post('/', validateLogin, controller.postLogin);

module.exports = routerLogin;
