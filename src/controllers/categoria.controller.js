const Categoria = require("../models/Categoria.model");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.crearCategoria = catchAsync(async (req, res, next) => {
  const { nombre, descripcion, padre_id } = req.body;

  const categoria = await Categoria.create({
    nombre,
    descripcion,
    padre_id,
  });

  res.status(201).json({
    status: "success",
    categoria,
  });
});

exports.obtenerCategorias = catchAsync(async (req, res, next) => {
  const categorias = await Categoria.findAll();

  res.status(200).json({
    status: "success",
    categorias,
  });
});

exports.obtenerCategoria = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const categoria = await Categoria.findByPk(id);

  if (!categoria) return next(new AppError("Categoria no encontrada", 404));

  res.status(200).json({
    status: "success",
    categoria,
  });
});

exports.actualizarCategoria = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre, descripcion, padre_id } = req.body;

  const categoria = await Categoria.findByPk(id);

  if (!categoria) return next(new AppError("Categoria no encontrada", 404));

  await categoria.update({
    nombre,
    descripcion,
    padre_id,
  });

  res.status(200).json({
    status: "success",
    categoria,
  });
});

exports.eliminarCategoria = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const categoria = await Categoria.findByPk(id);

  if (!categoria) return next(new AppError("Categoria no encontrada", 404));

  await categoria.destroy();

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.obtenerCategoriasPadre = catchAsync(async (req, res, next) => {
  const categorias = await Categoria.findAll({
    where: {
      padre_id: null,
    },
  });

  res.status(200).json({
    status: "success",
    categorias,
  });
});

exports.obtenerCategoriasHijas = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const categorias = await Categoria.findAll({
    where: {
      padre_id: id,
    },
  });

  res.status(200).json({
    status: "success",
    categorias,
  });
});
