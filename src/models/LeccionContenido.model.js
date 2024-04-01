const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const LeccionContenido = db.define("LeccionContenido", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_leccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_contenido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = LeccionContenido;
