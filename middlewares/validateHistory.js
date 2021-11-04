const Joi = require('@hapi/joi');

const validateHistory = (req, _res, next) => {
  const minNameLength = 5;

  const { error } = Joi.object({
    liters: Joi.string().min(minNameLength).not().empty()
.required(),
    meters: Joi.string().not().empty()
.required(),
  user: Joi.string().not().empty()
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

module.exports = validateHistory;