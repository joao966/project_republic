const jwt = require('jsonwebtoken');

const {JWT_SECRET} = process.env;

const { createServiceLogin, getByEmail } = require('../services');


const postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const result = await createServiceLogin(email, password);
  console.log(result.message);

  if (result.isError) {
    return next(result);
  }
  const { _id, email: em, role } = await getByEmail(email);

  const payload = {
    _id,
    em,
    role,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '45m' });

  return res.status(200).json({ token });
};

module.exports = {
  postLogin,
};
