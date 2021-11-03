const { validadeCreate, getAll, getUserByEmail, getUser } = require('./user');
const { createServiceLogin, getByEmail } = require('./login');

module.exports = {
  validadeCreate,
  getByEmail,
  createServiceLogin,
  getAll,
  getUserByEmail,
  getUser,
};
