var express = require("express")  
var customersController = require("../controllers/customers") 
var multipart = require("connect-multiparty")  

const api = express.Router()

api.post("/customers/write-massive", multipart(), customersController.writeMassive)
api.post("/customers/validate-before-write", multipart(), customersController.validate)
api.post("/customers/update-customers", multipart(), customersController.updateCustomers)
api.post("/garages/write-massive", multipart(), customersController.writeMassiveGarages)
api.get("/customers/fill-data-clients",  customersController.fillDataClients)

// api.get("/customers/test", function(req,res){
//   var d = new Date('12/09/2017') // Esta fecha es correcta
//   console.log(d);
//   var d = new Date('13/09/2017') // esta fecha es invalida
//   console.log(d);
//   res.send('APi')
// })

api.post("/customers/telesign", customersController.telesign)

api.get("/customers/postventas", customersController.postVenta)

module.exports = api