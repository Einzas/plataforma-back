const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Usuario = db.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 3,
  },
  estado: {
    type: DataTypes.ENUM("activo", "inactivo"),
    defaultValue: "activo",
    allowNull: false,
  },
});

module.exports = Usuario;
