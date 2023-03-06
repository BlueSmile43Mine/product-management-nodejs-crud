const { INTEGER, STRING, JSON } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const registration = sequelize.define(
    "registration",
    {
      user_id: {
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
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "registration",
      timestamps: false,
      indexes: [
        {
          name: "registration_pkey",
          unique: true,
          fields: [{ name: "user_id" }],
        },
      ],
    }
  );
  return registration;
};
