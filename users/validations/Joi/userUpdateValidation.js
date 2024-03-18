const Joi = require("joi");

const userUpdateValidation = (user) => {
  const schema = Joi.object({});

  return schema.validate(user);
};

module.exports = userUpdateValidation;
