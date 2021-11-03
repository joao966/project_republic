const error = require('./error');

const { validateUser } = require('./validateUser');
const { validateLogin } = require('./validateLogin');

module.exports = {
  error,
  validateUser,
  validateLogin,
};
