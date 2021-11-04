const { getUserByEmail, createUser, getAll } = require('./user');
const { getPassword, createLogin, getByEmail } = require('./login');
const { createHistory } = require('./history');

module.exports = {
  getUserByEmail,
  getByEmail,
  createUser,
  createLogin,
  getPassword,
  getAll,
  createHistory,
};
