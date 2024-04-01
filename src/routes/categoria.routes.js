const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validations.middleware");
const categoriaController = require("../controllers/categoria.controller");

const router = express.Router();

//router.use(authMiddleware.protect);

router
  .route("/")
  .get(categoriaController.obtenerCategorias)
  .post(
    validationMiddleware.crearCategoriaValidacion,
    categoriaController.crearCategoria
  );

router.route("/padres").get(categoriaController.obtenerCategoriasPadre);

router.route("/hijo/:id").get(categoriaController.obtenerCategoriasHijas);

router
  .route("/:id")
  .get(categoriaController.obtenerCategoria)
  .patch(
    validationMiddleware.actualizarCategoriaValidacion,
    categoriaController.actualizarCategoria
  )
  .delete(categoriaController.eliminarCategoria);

module.exports = router;
