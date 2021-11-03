const service = require('../services');

const posNewUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(name);

  const createdUsers = await service.validadeCreate(name, email, password);

  if (createdUsers.isError) {
    return next(createdUsers);
  }

  const newUser = {
    name,
    email,
    role: createdUsers.role,
    _id: createdUsers.id,
  };

  return res.status(201).json({ user: newUser });
};

const getByName = async (req, res) => {
  const { q } = req.query;
  console.log(q);
  const result = await service.getUserByEmail(q);
  return res.status(200).json(result);
};

module.exports = {
  posNewUser,
  getByName,
};
