const { validadeCreate, getAll, getUserByEmail, getUser } = require('./user');
const { createServiceLogin, getByEmail } = require('./login');
const { createHistory } = require('./history');

module.exports = {
  validadeCreate,
  getByEmail,
  createServiceLogin,
  getAll,
  getUserByEmail,
  getUser,
  createHistory,
};
