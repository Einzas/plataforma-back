const Usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");
const defaultUsers = [
  {
    nombre: "Admin",
    apellido: "Admin",
    correo: "admin@admin.com",
    contrasena: bcrypt.hashSync("admin", 12),
    cedula: "1234567890",
    id_rol: 1,
    estado: "activo",
  },
  {
    nombre: "User",
    apellido: "User",
    correo: "user@user.com",
    contrasena: bcrypt.hashSync("user", 12),
    cedula: "0987654321",
    id_rol: 2,
    estado: "activo",
  },
];

async function createDefaultUsers() {
  try {
    await Usuario.sync();
    const existingUsers = await Usuario.findAll();
    if (existingUsers.length === 0) {
      await Usuario.bulkCreate(defaultUsers);
      console.log("Default users inserted successfully.");
    } else {
      console.log("Users already exist in the database.");
    }
  } catch (error) {
    console.error("Error inserting default users:", error);
  }
}

module.exports = createDefaultUsers;
