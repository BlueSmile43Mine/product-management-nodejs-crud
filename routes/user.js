const { signUp, login } = require("../controllers/userController");
const { signUpValidation, loginValidation } = require("../utils/validation");
const { Auth_default } = require("../controllers/authController");

module.exports = (router) => {
  router.get("/", (req, res) => {
    console.log("url working");
    res.send("working");
  });

  router.post("/signup", Auth_default, signUpValidation, signUp);
  router.post("/login", Auth_default, loginValidation, login);
};
