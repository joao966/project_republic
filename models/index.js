const { getUserByEmail, createUser, getAll, getUser } = require('./user');
const { getPassword, createLogin, getByEmail } = require('./login');

module.exports = {
  getUserByEmail,
  getByEmail,
  createUser,
  createLogin,
  getPassword,
  getAll,
  getUser,
};
