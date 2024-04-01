const AppError = require("../utils/appError");
const Usuario = require("../models/usuario.model");

const catchAsync = require("../utils/catchAsync");

exports.validUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const usuario = await Usuario.findOne({
    where: {
      id: id,
      status: "activo",
    },
  });
  if (!usuario) {
    return next(new AppError("Usuario no encontrado 🧨", 404));
  }
  req.usuario = usuario;
  next();
});
