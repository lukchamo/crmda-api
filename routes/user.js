var express = require("express")
var userController = require("../controllers/user")

const api = express.Router()

api.post("/user/create", userController.createUser)
api.delete("/user/delete/:uid", userController.deleteUser)

module.exports = api