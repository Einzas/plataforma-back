const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const CursoCategoria = db.define("CursoCategoria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_curso: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = CursoCategoria;
