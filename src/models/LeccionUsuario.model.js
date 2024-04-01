const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const LeccionUsuario = db.define("LeccionUsuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_leccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("terminado", "pendiente"),
    allowNull: false,
    defaultValue: "pendiente",
  },
});

module.exports = LeccionUsuario;
