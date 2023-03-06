const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const Router = require('./routes')
const { sequelize } = require('./database')
const port = 8000
const multer  = require('multer')
const formData = multer()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// read form data from postman
app.use(formData.any())

sequelize.sync().then(() => {

  console.log("db connection successful");
  
  });

// calling router function with passing express app as paramter 
app.use('/', Router);

app.listen(port, () => {
  console.log(`server runing at localhost:${port}`)
})



