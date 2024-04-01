const Nivel = require("../models/niveles.model");

const defaultNiveles = [
  {
    nombre: "Nivel 1",
    descripcion: "Nivel 1",
    id_curso: 1,
  },
  {
    nombre: "Nivel 2",
    descripcion: "Nivel 2",
    id_curso: 1,
  },
  {
    nombre: "Nivel 3",
    descripcion: "Nivel 3",
    id_curso: 1,
  },
  {
    nombre: "Nivel 4",
    descripcion: "Nivel 4",
    id_curso: 1,
  },
  {
    nombre: "Nivel 5",
    descripcion: "Nivel 5",
    id_curso: 1,
  },
  {
    nombre: "Nivel 6",
    descripcion: "Nivel 6",
    id_curso: 1,
  },
];

async function seedNiveles() {
  try {
    // Sincroniza el modelo Nivel
    await Nivel.sync();

    if ((await Nivel.findAll()).length === 0) {
      await Nivel.bulkCreate(defaultNiveles);
      console.log("Datos por defecto de niveles insertados exitosamente.");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = seedNiveles;
