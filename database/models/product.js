const { INTEGER, STRING, JSON } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      product_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "",
      },
      price: {
        type: DataTypes.FLOAT(),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.SMALLINT(),
        allowNull: false,
      },
      active: {
        type: DataTypes.SMALLINT(),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "product",
      timestamps: false,
      indexes: [
        {
          name: "product_pkey",
          unique: true,
          fields: [{ name: "product_id" }],
        },
      ],
    }
  );
  return product;
};
