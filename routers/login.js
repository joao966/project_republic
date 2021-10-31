require('dotenv').config();
const express = require('express');

const controller = require('../controllers');

const routerLogin = express.Router();

routerLogin.post('/', controller.postLogin);

module.exports = routerLogin;