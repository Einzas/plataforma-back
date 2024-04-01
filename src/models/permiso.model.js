const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Permiso = db.define("Permiso", {
  permiso_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_permiso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  detalle_permiso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado_permiso: {
    type: DataTypes.ENUM("Activo", "Inactivo"),
    defaultValue: "Activo",
  },
});

module.exports = Permiso;
