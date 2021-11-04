const express = require('express');

const controller = require('../controllers');
const { validateHistory } = require('../middlewares');

const routerHistory = express.Router();

routerHistory.post('/', validateHistory, controller.postNewHistory);

module.exports = routerHistory;
