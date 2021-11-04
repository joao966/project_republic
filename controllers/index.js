const { posNewUser, getByName } = require('./user');
const { postLogin } = require('./login');
const { postNewHistory } = require('./history');

module.exports = {
  posNewUser,
  postLogin,
  getByName,
  postNewHistory,
};
