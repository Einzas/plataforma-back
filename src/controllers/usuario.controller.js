const Usuario = require("../models/usuario.model");

const AppError = require("../utils/appError");
const bcrypt = require("bcrypt");
const catchAsync = require("../utils/catchAsync");
const generateJWT = require("../utils/jwt");

exports.signup = catchAsync(async (req, res, next) => {
  const { nombre, apellido, correo, contrasena, cedula } = req.body;

  const hashedPassword = await bcrypt.hash(contrasena, 12);

  const usuario = await Usuario.create({
    nombre,
    apellido,
    correo,
    contrasena: hashedPassword,
    cedula,
  });

  const token = await generateJWT(usuario.id);

  res.status(201).json({
    status: "success",
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      rol: usuario.id_rol,
    },
    token,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { correo, contrasena } = req.body;
  const usuario = await Usuario.findOne({
    where: { correo, estado: "activo" },
  });

  if (!usuario) next(new AppError("Usuario no encontrado", 404));

  if (!(await bcrypt.compare(contrasena, usuario.contrasena)))
    next(new AppError("Contraseña incorrecta", 401));

  const token = await generateJWT(usuario.id);

  res.status(200).json({
    status: "success",
    usuario: {
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      correo: usuario.correo,
      rol: usuario.id_rol,
    },
    token,
  });
});

exports.actualizarUsuario = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { nombre, apellido, correo, contrasena } = req.body;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) return next(new AppError("Usuario no encontrado", 404));

  await usuario.update({
    nombre,
    apellido,
    correo,
    contrasena,
  });

  res.status(200).json({
    status: "success",
    usuario,
  });
});

exports.obtenerUsuarios = catchAsync(async (req, res, next) => {
  const usuarios = await Usuario.findAll();

  res.status(200).json({
    status: "success",
    usuarios,
  });
});

exports.obtenerUsuario = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) return next(new AppError("Usuario no encontrado", 404));

  res.status(200).json({
    status: "success",
    usuario,
  });
});

exports.eliminarUsuario = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) return next(new AppError("Usuario no encontrado", 404));

  await usuario.update({
    status: "inactivo",
  });

  res.status(200).json({
    status: "success",
    usuario,
  });
});
