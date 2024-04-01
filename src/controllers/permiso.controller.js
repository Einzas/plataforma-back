const Permiso = require("../models/permiso.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.crearPermiso = catchAsync(async (req, res, next) => {
  const { nombre_permiso, estado_permiso } = req.body;

  const permiso = await Permiso.create({
    nombre_permiso,
    estado_permiso,
  });

  res.status(201).json({
    status: "success",
    permiso,
  });
});
exports.obtenerPermisos = catchAsync(async (req, res, next) => {
  const permisos = await Permiso.findAll();

  res.status(200).json({
    status: "success",
    permisos,
  });
});

exports.obtenerPermiso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const permiso = await Permiso.findByPk(id);

  if (!permiso) return next(new AppError("Permiso no encontrado", 404));

  res.status(200).json({
    status: "success",
    permiso,
  });
});

exports.actualizarPermiso = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_permiso, estado_permiso } = req.body;

  const permiso = await Permiso.findByPk(id);

  if (!permiso) return next(new AppError("Permiso no encontrado", 404));

  await permiso.update({
    nombre_permiso,
    estado_permiso,
  });

  res.status(200).json({
    status: "success",
    permiso,
  });
});

exports.eliminarPermiso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const permiso = await Permiso.findByPk(id);

  if (!permiso) return next(new AppError("Permiso no encontrado", 404));

  await permiso.update({
    estado_permiso: "Inactivo",
  });

  res.status(204).json({
    status: "success",
    permiso: null,
  });
});
