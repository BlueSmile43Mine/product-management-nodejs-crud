const { signup, loginCall } = require("../services/user");

//  signup method to call duirng /signup api
const signUp = async (req, res, next) => {
  const data = await signup(req.body);
  return res.json(data);
};
//  login method to call duirng /login api

const login = async (req, res, next) => {
  const data = await loginCall(req.body);
  return res.json(data);
};
module.exports = { signUp, login };
