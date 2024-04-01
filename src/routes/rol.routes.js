const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const rolController = require("../controllers/rol.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .get(rolController.obtenerRoles)
  .post(validationMiddleware.crearRolValidacion, rolController.crearRol);

router
  .route("/:id")
  .get(rolController.obtenerRol)
  .patch(
    validationMiddleware.actualizarRolValidacion,
    rolController.actualizarRol
  )
  .delete(rolController.eliminarRol);

module.exports = router;
