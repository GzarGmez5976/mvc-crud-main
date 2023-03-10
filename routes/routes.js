var express = require("express");

var userController = require("../src/user/userController");
const router = express.Router();

//  Ruta para login
router.route("/user/login").get(userController.loginUserControllerFunc);
//  Ruta para crear usuario
router.route("/user/create").post(userController.createUserControllerFunc);
//  Ruta para buscar usuario
router.route("/user/search").get(userController.searchEmailControllerFunc);
//  Ruta para modificar usuario
router.route("/user/update").put(userController.updateUserControllerFunc);
//  Ruta para eliminar usuario
router.route("/user/delete").delete(userController.deleteUserControllerFunc);

module.exports = router;
