const {getUserByEmail, createUser } = require('./user');
const {getPassword, createLogin, getByEmail} = require('./login');

module.exports = {
  getUserByEmail,
  getByEmail,
  createUser,
  createLogin,
  getPassword
};
