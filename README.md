# product-management-nodejs-crud
Pre requisites are as follows:

Just give a database name and server name in the .env file
Need not create any tables. Sequelize module will do the table creation.
Used Joi validation.
Same default jwt token for all apis for now. And implemented in the middleware
# .env 

DB_Name = product_management
DB_Host = localhost
DB_Port = 
DB_Username = root
DB_Password = 

JWT_KEY = kalyan

AUTH_DEFAULT = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6Ijk2MDEjIiwiaWF0IjoxNjc4MDgxODUzfQ.6jYMOw_HtKy4sEyIsySQpVrBIkPApM-NLI9irWDiSrU

