const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Categoria = db.define("Categoria", {
  id: {
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
  padre_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estado: {
    type: DataTypes.ENUM("activo", "inactivo"),
    allowNull: false,
  },
});

module.exports = Categoria;
