const service = require('../services');

const postNewHistory = async (req, res, next) => {
  const { liters, meters, user } = req.body;

  const createdUsers = await service.createHistory(liters, meters, user);

  if (createdUsers.isError) {
    return next(createdUsers);
  }

  return res.status(201).json({ message: 'Histórico criado com sucesso' });
};

module.exports = {
  postNewHistory,
};
