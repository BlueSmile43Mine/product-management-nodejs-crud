const { create_token } = require("../controllers/authController");
const { registration } = require("../database");
const { statusCode } = require("../utils/statusCode");
const { encrypt, decrypt } = require("../utils/helpers");

const signup = async (body) => {
  try {
    const { name, username, password } = body;
    const check = await registration.findAndCountAll({
      where: { username },
      raw: true,
    });
    if (check.count == 1) {
      return statusCode(0, "Username already exists");
    }
    const new_user = await registration.create({
      name,
      username,
      password: encrypt(password),
    });
    return statusCode(1, "User successfully registered");
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};

const loginCall = async (body) => {
  try {
    const { username, password } = body;
    const check = await registration.findAndCountAll({
      where: { username, password: encrypt(password) },
      raw: true,
    });
    // user exists
    if (check.count == 1) {
      const token = await create_token(check.rows[0].user_id);
      return statusCode(1, "Valid User", { token });
    }
    // user does not exist
    return statusCode(0, "Invalid username or password");
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};

module.exports = {
  signup,
  loginCall,
};
