const {validadeCreate} = require('./user');
const { createServiceLogin,getByEmail } = require('./login');

module.exports ={
  validadeCreate,
  getByEmail,
  createServiceLogin,
};
