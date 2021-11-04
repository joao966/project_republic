const error = require('./error');

const { validateUser } = require('./validateUser');
const { validateLogin } = require('./validateLogin');
const validateHistory = require('./validateHistory');

module.exports = {
  error,
  validateUser,
  validateLogin,
  validateHistory,
};
