const AppError = require("../utils/appError");
const logger = require("../utils/logger");

const handleCastError23505 = () => {
  return new AppError("Campo duplicado. Por favor, ingrese otro valor.", 400);
};
const handleJWTExpiredError = () => {
  return new AppError(
    "Inicio de sesión expirado. Por favor, inicie sesión nuevamente.",
    401
  );
};
const handleJWTError = () => {
  return new AppError(
    "Token inválido. Por favor, inicie sesión nuevamente.",
    401
  );
};

const sendErrorDev = (err, res) => {
  logger.info(err);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};
const sendErrorProd = (err, res) => {
  logger.info(err);
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    return res.status(500).json({
      status: "fail",
      message: "Algo salió mal",
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }
  if (process.env.NODE_ENV === "production") {
    let error = err;
    if (error.parent?.code === "23505") error = handleCastError23505();
    if (error.name === "TokenExpiredError") error = handleJWTExpiredError();
    if (error.name === "JsonWebTokenError") error = handleJWTError();
    sendErrorProd(error, res);
  }
};

module.exports = globalErrorHandler;
