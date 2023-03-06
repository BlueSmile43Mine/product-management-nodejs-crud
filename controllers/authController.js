const jwt = require("jsonwebtoken");
const { statusCode } = require("../utils/statusCode");
const { JWT_KEY } = require("../config");

const Auth_default = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const decoded = jwt.verify(authorization, JWT_KEY);
    next();
  } catch (error) {
    console.log("Invalid Token");

    return res.json(statusCode(0, "Invalid token"));
  }
};

// jwt create token for each user after login

const create_token = async (user_id) => {
  try {
    const token = jwt.sign({ user_id }, JWT_KEY + user_id, {
      expiresIn: "24h",
    });
    return token;
  } catch (error) {
    console.log("token creation failed");
    return false;
  }
};
module.exports = {
  Auth_default,
  create_token,
};
