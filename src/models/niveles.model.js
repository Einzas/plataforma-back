const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Nivel = db.define("Nivel", {
  id_nivel: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_curso: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("activo", "inactivo"),
    allowNull: false,
    defaultValue: "activo",
  },
});

module.exports = Nivel;
