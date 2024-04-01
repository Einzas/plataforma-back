const { DataTypes } = require("sequelize");
const { db } = require("../database/config");
const { text } = require("express");

const Contenido = db.define("Contenido", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: {
    type: DataTypes.ENUM("video", "documento", "imagen"),
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagen_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  id_leccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM("activo", "inactivo"),
    allowNull: false,
    defaultValue: "activo",
  },
});

module.exports = Contenido;
