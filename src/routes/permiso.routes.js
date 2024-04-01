const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const permisoController = require("../controllers/permiso.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .get(permisoController.obtenerPermisos)
  .post(
    validationMiddleware.crearPermisoValidacion,
    permisoController.crearPermiso
  );

router
  .route("/:id")
  .get(permisoController.obtenerPermiso)
  .patch(
    validationMiddleware.actualizarPermisoValidacion,
    permisoController.actualizarPermiso
  )
  .delete(permisoController.eliminarPermiso);

module.exports = router;
