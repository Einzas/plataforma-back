const RolPermiso = require("../models/rolPermiso.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
exports.crearRolPermiso = catchAsync(async (req, res, next) => {
  const { id_rol, id_permiso } = req.body;

  const rolPermiso = await RolPermiso.create({
    id_rol,
    id_permiso,
  });

  res.status(201).json({
    status: "success",
    rolPermiso,
  });
});
exports.obtenerRolesPermisos = catchAsync(async (req, res, next) => {
  const rolesPermisos = await RolPermiso.findAll();

  res.status(200).json({
    status: "success",
    rolesPermisos,
  });
});

exports.obtenerRolPermiso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolPermiso = await RolPermiso.findByPk(id);

  if (!rolPermiso) return next(new AppError("RolPermiso no encontrado", 404));

  res.status(200).json({
    status: "success",
    rolPermiso,
  });
});

exports.actualizarRolPermiso = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { id_rol, id_permiso } = req.body;

  const rolPermiso = await RolPermiso.findByPk(id);

  if (!rolPermiso) return next(new AppError("RolPermiso no encontrado", 404));

  await rolPermiso.update({
    id_rol,
    id_permiso,
  });

  res.status(200).json({
    status: "success",
    rolPermiso,
  });
});

exports.eliminarRolPermiso = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const rolPermiso = await RolPermiso.findByPk(id);

  if (!rolPermiso) return next(new AppError("RolPermiso no encontrado", 404));

  await rolPermiso.update({
    status: "inactivo",
  });

  res.status(204).json({
    status: "success",
    data: null,
  });
});
