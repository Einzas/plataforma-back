const Rol = require("../models/rol.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.crearRol = catchAsync(async (req, res, next) => {
  const { nombre_rol, estado_rol } = req.body;

  const rol = await Rol.create({
    nombre_rol,
    estado_rol,
  });

  res.status(201).json({
    status: "success",
    rol,
  });
});
exports.obtenerRoles = catchAsync(async (req, res, next) => {
  const roles = await Rol.findAll();

  res.status(200).json({
    status: "success",
    roles,
  });
});

exports.obtenerRol = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rol = await Rol.findByPk(id);

  if (!rol) return next(new AppError("Rol no encontrado", 404));

  res.status(200).json({
    status: "success",
    rol,
  });
});

exports.actualizarRol = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre_rol, estado_rol } = req.body;

  const rol = await Rol.findByPk(id);

  if (!rol) return next(new AppError("Rol no encontrado", 404));

  await rol.update({
    nombre_rol,
    estado_rol,
  });

  res.status(200).json({
    status: "success",
    rol,
  });
});

exports.eliminarRol = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rol = await Rol.findByPk(id);

  if (!rol) return next(new AppError("Rol no encontrado", 404));

  await rol.update({ estado_rol: "Inactivo" });

  res.status(204).json();
});
