const {
  createProductCall,
  getOneProductCall,
  updateProductCall,
  deleteProductCall,
  getAllProducts,
} = require("../services/product");

//  createProduct method to call duirng /createProduct api
const createProduct = async (req, res, next) => {
  const data = await createProductCall(req.body);
  return res.json(data);
};

//  readProduct method to call duirng /readProduct api -- all product data
const readProduct = async (req, res, next) => {
  const data = await getAllProducts(req.body);
  return res.json(data);
};
//  updateProduct method to call duirng /updateProduct api
const updateProduct = async (req, res, next) => {
  const data = await updateProductCall(req.body);
  return res.json(data);
};
//  deleteProduct method to call duirng /deleteProduct api
const deleteProduct = async (req, res, next) => {
  const data = await deleteProductCall(req.body.product_id);
  return res.json(data);
};
//  getProduct method to call duirng /getProduct api -- details of one product
const getOneProduct = async (req, res, next) => {
  const { product_id } = req.body;
  if (
    product_id == undefined ||
    product_id == "" ||
    !Number.isInteger(parseInt(product_id))
  )
    return res.json(statusCode(0, "Invalid Product Id"));

  const data = await getOneProductCall(product_id);
  return res.json(data);
};
module.exports = {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
