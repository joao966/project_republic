const service = require('../services');

const posNewUser = async (req, res) => {
  const { name, email, password } = req.body;

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

module.exports = {
  posNewUser,
};
