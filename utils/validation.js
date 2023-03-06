const joi = require("joi");
const { statusCode } = require("./statusCode");
// schema for normal signup

const validation = {
  signUpValidation: async (req, res, next) => {
    // schema for signup

    const signupSchema = joi.object({
      name: joi.any().label("name").allow(""),
      username: joi.string().label("username").required().messages({
        "any.required": `Username is a required field`,
        "string.empty": `Username is not allowed to be empty`,
      }),
      password: joi.string().label("password").required().messages({
        "any.required": `Password is a required field`,
        "string.empty": `Password is not allowed to be empty`,
      }),
    });

    var { error } = signupSchema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
  loginValidation: async (req, res, next) => {
    const loginSchema = joi.object({
      username: joi.string().label("username").required().messages({
        "any.required": `Username is a required field`,
        "string.empty": `Username is not allowed to be empty`,
      }),
      password: joi.string().label("password").required().messages({
        "any.required": `Password is a required field`,
        "string.empty": `Password is not allowed to be empty`,
      }),
    });

    var { error } = loginSchema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
  productVal: async (req, res, next) => {
    const productSchema = joi.object({
      name: joi.string().label("name").required().messages({
        "any.required": `name is a required field`,
        "string.empty": `name is not allowed to be empty`,
      }),
      price: joi.number().precision(2).label("price").required().messages({
        "any.required": `price is a required field`,
        "number.empty": `price is not allowed to be empty`,
      }),
      quantity: joi
        .number()
        .integer()
        .positive()
        .label("quantity")
        .required()
        .messages({
          "any.required": `quantity is a required field`,
          "number.base": `quantity must be a positive number`,
        }),
      active: joi.number().valid(0, 1).label("active").required().messages({
        "any.required": `active is a required field`,
        "any.only": `active must be one of [0, 1]`,
      }),
    });

    var { error } = productSchema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
  updateProductVal: async (req, res, next) => {
    const updateProductSchema = joi.object({
      product_id: joi.string().label("product_id").required().messages({
        "any.required": `Product Id is a required field`,
        "string.empty": `Product Id is not allowed to be empty`,
        "number.base": `Product Id must be a positive number`,
      }),
      name: joi.string().label("name").required().messages({
        "any.required": `name is a required field`,
        "string.empty": `name is not allowed to be empty`,
      }),
      price: joi.number().precision(2).label("price").required().messages({
        "any.required": `price is a required field`,
        "number.empty": `price is not allowed to be empty`,
      }),
      quantity: joi
        .number()
        .integer()
        .positive()
        .label("quantity")
        .required()
        .messages({
          "any.required": `quantity is a required field`,
          "number.base": `quantity must be a positive number`,
        }),
      active: joi.number().valid(0, 1).label("active").required().messages({
        "any.required": `active is a required field`,
        "any.only": `active must be one of [0, 1]`,
      }),
    });

    var { error } = updateProductSchema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
  delProductVal: async (req, res, next) => {
    const delProductSchema = joi.object({
      product_id: joi.string().label("product_id").required().messages({
        "any.required": `Product Id is a required field`,
        "string.empty": `Product Id is not allowed to be empty`,
        "number.base": `Product Id must be a positive number`,
      }),
    });

    var { error } = delProductSchema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
  addTravellerValidation: async (req, res, next) => {
    const schema = joi.object({
      user_id: joi.number().integer().required().label("user_id").messages({
        "any.required": `User Id is a required field`,
        "string.empty": `User Id is not allowed to be empty`,
        "number.base": "Invalid user id",
      }),
      first_name: joi.string().required().label("first_name").messages({
        "any.required": `First Name is a required field`,
        "string.empty": `First Name is not allowed to be empty`,
      }),
      last_name: joi.string().required().label("last_name").messages({
        "any.required": `Last Name is a required field`,
        "string.empty": `Last Name is not allowed to be empty`,
      }),
      gender: joi
        .any()
        .allow(1, 2, 3, "1", "2", "3", "")
        .label("gender")
        .messages({
          "any.only": `Invalid gender`,
          "string.empty": "Gender is not allowed to be empty",
          "any.required": "Gender is a required field",
        }),
      dob: joi
        .string()
        .regex(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/)
        .label("dob")
        .messages({
          "any.required": `DOB is a required field`,
          "string.empty": `DOB is not allowed to be empty`,
          "string.pattern.base": `Invalid date format DD/MM/YYYY`,
        }),
      passport_expiry: joi
        .string()
        .regex(/^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/)
        .allow("")
        .label("passport_expiry")
        .messages({
          "any.required": `Passport Expiry is a required field`,
          "string.empty": `Passport is not allowed to be empty`,
          "string.pattern.base": `Invalid date format DD/MM/YYYY`,
        }),
      passport: joi.date().allow("").label("passport_expiry").messages({
        "any.required": `Passport is a required field`,
        "string.empty": `Passport is not allowed to be empty`,
      }),
    });
    var { error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      return res.json(statusCode(0, message));
    }
    return next();
  },
};

module.exports = validation;
