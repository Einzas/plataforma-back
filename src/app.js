const express = require("express");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/error.controller");

const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const sanitizer = require("perfect-express-sanitizer");

const usuarioRouter = require("./routes/usuario.routes");
const rolRouter = require("./routes/rol.routes");
const permisoRouter = require("./routes/permiso.routes");
const rolPermisoRouter = require("./routes/rolPermiso.routes");
const categoriaRouter = require("./routes/categoria.routes");
const app = express();

// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100000,
  windowMs: 60 * 60 * 1000,

  message:
    "Muchas peticiones desde esta IP, por favor intenta de nuevo en una hora",
});
app.use("/api/v1", limiter);

// Body parser, reading data from body into req.body
app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Prevent parameter pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Routes
app.use("/api/v1/usuarios", usuarioRouter);
app.use("/api/v1/roles", rolRouter);
app.use("/api/v1/permisos", permisoRouter);
app.use("/api/v1/roles-permisos", rolPermisoRouter);
app.use("/api/v1/categorias", categoriaRouter);

// Error handler
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `No se puede encontrar ${req.originalUrl} en este servidor`,
      404
    )
  );
});

// Global error handler
app.use(globalErrorHandler);

module.exports = app;
