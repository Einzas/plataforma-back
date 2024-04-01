const LeccionUsuario = require("../models/LeccionUsuario.model");

const defaultLeccionUsuario = [
  {
    id_usuario: 1,
    id_leccion: 1,
    estado: "terminado",
  },
  {
    id_usuario: 1,
    id_leccion: 2,
    estado: "terminado",
  },
  {
    id_usuario: 1,
    id_leccion: 3,
    estado: "terminado",
  },
  {
    id_usuario: 1,
    id_leccion: 4,
    estado: "terminado",
  },
  {
    id_usuario: 1,
    id_leccion: 5,
    estado: "terminado",
  },
  {
    id_usuario: 1,
    id_leccion: 6,
    estado: "terminado",
  },
];

async function seedLeccionUsuario() {
  try {
    // Sincroniza el modelo LeccionUsuario
    await LeccionUsuario.sync();

    if ((await LeccionUsuario.findAll()).length === 0) {
      await LeccionUsuario.bulkCreate(defaultLeccionUsuario);
      console.log(
        "Datos por defecto de leccionUsuario insertados exitosamente."
      );
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = seedLeccionUsuario;
