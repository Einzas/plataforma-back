const Curso = require("../models/cursos.model");

const defaultCourses = [
  {
    nombre: "Curso de programacion",
    descripcion: "Curso de programacion",
    precio: 100,
  },
  {
    nombre: "Curso de base de datos",
    descripcion: "Curso de base de datos",
    precio: 100,
  },
  {
    nombre: "Curso de redes",
    descripcion: "Curso de redes",
    precio: 100,
  },
  {
    nombre: "Curso de fisica",
    descripcion: "Curso de fisica",
    precio: 100,
  },
  {
    nombre: "Curso de quimica organica",
    descripcion: "Curso de quimica organica",
    precio: 100,
  },
  {
    nombre: "Curso de quimica inorganica",
    descripcion: "Curso de quimica inorganica",
    precio: 100,
  },
];

async function seedCourses() {
  try {
    // Sincroniza el modelo Curso
    await Curso.sync();

    if ((await Curso.findAll()).length === 0) {
      await Curso.bulkCreate(defaultCourses);
      console.log("Datos por defecto de curso insertados exitosamente.");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = seedCourses;
