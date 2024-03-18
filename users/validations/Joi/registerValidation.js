const Joi = require("joi");

const userRegisterValidation = (userData) => {
  const schema = Joi.object({
    name: Joi.object({
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(2).max(256),
      last: Joi.string().min(2).max(256).required(),
    }).required(),
    business: Joi.boolean().required(),
    phone: Joi.string()
      .pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{9,}$/
      )
      .required(),
    image: Joi.object({
      url: Joi.string().uri(),
      alt: Joi.string().min(2).max(256),
    }),
    address: Joi.object({
      state: Joi.string().min(2).max(256),
      country: Joi.string().min(2).max(256).required(),
      city: Joi.string().min(2).max(256).required(),
      street: Joi.string().min(2).max(256).required(),
      houseNumber: Joi.string()
        .regex(/^[1-9][0-9]*$/)
        .required(),
      zip: Joi.string().min(4),
    }).required(),
  });

  const { error } = schema.validate(userData, { abortEarly: false });

  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    return Promise.reject(errorMessage);
  } else {
    return Promise.resolve("User data is valid.");
  }
};

module.exports = userRegisterValidation;
