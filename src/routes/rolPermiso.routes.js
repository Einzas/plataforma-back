const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const rolPermisoController = require("../controllers/rolPermiso.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .get(rolPermisoController.obtenerRolesPermisos)
  .post(
    validationMiddleware.crearRolPermisoValidacion,
    rolPermisoController.crearRolPermiso
  );

router
  .route("/:id")
  .get(rolPermisoController.obtenerRolPermiso)
  .patch(
    validationMiddleware.updateRolePermissionValidation,
    rolPermisoController.actualizarRolPermiso
  )
  .delete(rolPermisoController.eliminarRolPermiso);

module.exports = router;
