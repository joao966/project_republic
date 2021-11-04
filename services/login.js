const { getPassword, createLogin, getByEmail } = require('../models');
const { errorBusiness } = require('../helpers/errors');

const createServiceLogin = async (email, password) => {
  const isEmail = await getByEmail(email);
  const passIsValid = await getPassword(password);

  if (!isEmail || !passIsValid) {
    return errorBusiness('Incorrect username or password');
  }

  const login = await createLogin(email, password);
  return login;
};

module.exports = {
  createServiceLogin,
  getByEmail,
};