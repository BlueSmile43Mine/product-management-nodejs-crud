const { product } = require("../database");
const { statusCode } = require("../utils/statusCode");

const createProductCall = async (body) => {
  try {
    const { name, price, quantity, active } = body;
    const check_product = await product.findAndCountAll({
      where: { name },
      raw: true,
    });
    if (check_product.count == 1) {
      return statusCode(0, "Product already exists");
    }
    const new_product = await product.create({
      name,
      price,
      quantity,
      active,
    });
    return statusCode(1, "Product created successfully ");
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};

const getAllProducts = async (body) => {
  try {
    const { product_id } = body;
    const all_products = await product.findAll({ raw: true });
    return statusCode(1, "Product created successfully ", all_products);
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};
const getOneProductCall = async (product_id) => {
  try {
    const get_productId = await product.findByPk(parseInt(product_id));
    if (get_productId == null) return statusCode(0, "Product doesn't exist");

    return statusCode(1, "Product Data retrieved successfully", get_productId);
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};
const updateProductCall = async (body) => {
  try {
    const { product_id, name, price, quantity, active } = body;

    const get_productId = await product.findByPk(parseInt(product_id));
    if (get_productId == null) return statusCode(0, "Product doesn't exist");

    const update_product = await product.update(
      {
        name,
        price,
        quantity,
        active,
      },
      { where: { product_id } }
    );
    return statusCode(1, "Product updated successfully ");
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};
const deleteProductCall = async (product_id) => {
  try {
    const check_productId = await product.findByPk(parseInt(product_id));
    if (check_productId == null) return statusCode(0, "Product doesn't exist");

    const del_product = await product.destroy({
      where: { product_id },
    });
    if (del_product)
      return statusCode(1, {
        status: 1,
        product_id,
        message: "Product Deleted Successfully",
      });
    return statusCode(0, "Product Deletion failed");
  } catch (err) {
    console.log(err, "err");
    return statusCode(0, err);
  }
};

module.exports = {
  createProductCall,
  getAllProducts,
  updateProductCall,
  deleteProductCall,
  getOneProductCall,
};
