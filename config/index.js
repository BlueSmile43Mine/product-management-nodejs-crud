const dotenv = require('dotenv')
dotenv.config();



module.exports = {

  DATABASE: {
    name: process.env.DB_Name,
    username: process.env.DB_Username,
    password: process.env.DB_Password,
    options: {
      host: process.env.DB_Host,
      port: process.env.DB_Port,
      dialect: 'mysql',
      freezeTableName: true,
      quoteIdentifiers: false,
      define: {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },

      pool: {
        max: 100,
        min: 0,
        acquire: 1000000,
        idle: 200000,
      },
      dialectOptions: {
        decimalNumbers: true,
        charset: 'utf8mb4',
      },
      logging: false,
    },

  },


  JWT_KEY: process.env.JWT_KEY,         // JWT KEY
  AUTH_DEFAULT: process.env.AUTH_DEFAULT
};

