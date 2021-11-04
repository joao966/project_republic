const { getPassword, createLogin, getByEmail } = require('../models');
const { errorBusiness } = require('../helpers/errors');

const createServiceLogin = async (email, password) => {
  const emailIsValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  const passIsValid = await getPassword(password);
  if (!emailIsValid.test(email) && !passIsValid) {
    return errorBusiness('Incorrect username or password');
  }

  const login = await createLogin(email, password);
  return login;
};

module.exports = {
  createServiceLogin,
  getByEmail,
};