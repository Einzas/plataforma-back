const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const RolPermiso = db.define("RolPermiso", {
  id_rolPermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_permiso: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RolPermiso;
