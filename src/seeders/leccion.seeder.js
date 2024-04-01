const Leccion = require("../models/Leccion.model");
const Nivel = require("../models/niveles.model");

const defaultLecciones = [
  {
    nombre: "Leccion 1",
    descripcion: "Leccion 1",
    id_nivel: 1,
  },
  {
    nombre: "Leccion 2",
    descripcion: "Leccion 2",
    id_nivel: 1,
  },
  {
    nombre: "Leccion 3",
    descripcion: "Leccion 3",
    id_nivel: 2,
  },
  {
    nombre: "Leccion 4",
    descripcion: "Leccion 4",
    id_nivel: 2,
  },
  {
    nombre: "Leccion 5",
    descripcion: "Leccion 5",
    id_nivel: 3,
  },
  {
    nombre: "Leccion 6",
    descripcion: "Leccion 6",
    id_nivel: 3,
  },
];

async function seedLecciones() {
  try {
    // Sincroniza el modelo Leccion
    await Leccion.sync();

    if ((await Leccion.findAll()).length === 0) {
      await Leccion.bulkCreate(defaultLecciones);
      console.log("Datos por defecto de lecciones insertados exitosamente.");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = seedLecciones;
