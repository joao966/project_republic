const { posNewUser, getByName } = require('./user');
const { postLogin } = require('./login');

module.exports = {
  posNewUser,
  postLogin,
  getByName,
};
