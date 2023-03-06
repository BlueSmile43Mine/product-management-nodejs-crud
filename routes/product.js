const {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} = require("../controllers/productController");
const {
  productVal,
  updateProductVal,
  delProductVal,
} = require("../utils/validation");
const { Auth_default } = require("../controllers/authController");

module.exports = (router) => {
  router.post("/createProduct", Auth_default, productVal, createProduct);
  router.post("/getOneProduct", Auth_default, getOneProduct);

  router.get("/allProducts", Auth_default, readProduct);
  router.post("/updateProduct", Auth_default, updateProductVal, updateProduct);
  router.post("/deleteProduct", Auth_default, delProductVal, deleteProduct);
};
