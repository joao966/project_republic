const Joi = require('@hapi/joi');

const validateUser = (req, _res, next) => {
  const minNameLength = 5;

  const { error } = Joi.object({
    name: Joi.string().min(minNameLength).not().empty()
.required(),
    email: Joi.string().min(1).not().empty()
.required(),
  password: Joi.string().min(1).not().empty()
.required(),
  }).validate(req.body);
  
  if (error) {
 return next({
    isJoi: true,
    message: error.details[0].message,
  }); 
}

  next();
};

module.exports = { validateUser };