const router = require("express").Router();
const userRoutes = require("./user");
const productRoutes = require("./product");

userRoutes(router);
productRoutes(router);

module.exports = router;
