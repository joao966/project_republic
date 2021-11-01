const { getUserByEmail, createUser } = require('../models');

const { errorBusiness } = require('../helpers/errors');

const validadeCreate = async (name, email, password) => {
  const emailIsExists = await getUserByEmail(email);
  const emailIsValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;

  if (emailIsExists) {
    return errorBusiness('Email already registered');
  }
  
  if (!emailIsValid.test(email)) {
    return errorBusiness('Invalid entries. Try again.');
  }
  
  const userCreated = await createUser(name, email, password);

  return userCreated;
};

module.exports = { validadeCreate };