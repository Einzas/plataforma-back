const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const usuarioMiddleware = require("../middlewares/usuario.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");

const usuarioController = require("../controllers/usuario.controller");
const router = express.Router();

router.post(
  "/signup",
  validationMiddleware.crearUsuarioValidacion,
  usuarioController.signup
);

router.post(
  "/login",
  validationMiddleware.loginValidacion,
  usuarioController.login
);
router.use(authMiddleware.protect);

router.get("/", usuarioMiddleware.validUser, usuarioController.obtenerUsuarios);

router
  .route("/:id")
  .patch(
    usuarioMiddleware.validUser,
    validationMiddleware.actualizarUsuarioValidacion,
    authMiddleware.protectAccountOwner,
    usuarioController.actualizarUsuario
  )
  .delete(
    usuarioMiddleware.validUser,
    authMiddleware.protectAccountOwner,
    usuarioController.eliminarUsuario
  );

module.exports = router;
