const cursoCategoria = require("../models/cursoCategoria.model");

const Categoria = require("../models/Categoria.model");
const Curso = require("../models/cursos.model");

const defaultCourses = [
  {
    id_curso: 1,
    id_categoria: 1,
  },
  {
    id_curso: 2,
    id_categoria: 2,
  },
  {
    id_curso: 3,
    id_categoria: 3,
  },
  {
    id_curso: 4,
    id_categoria: 4,
  },
  {
    id_curso: 5,
    id_categoria: 5,
  },
  {
    id_curso: 6,
    id_categoria: 6,
  },
];

async function seedCourses() {
  try {
    // Sincroniza el modelo CursoCategoria
    await cursoCategoria.sync();

    if ((await cursoCategoria.findAll()).length === 0) {
      await cursoCategoria.bulkCreate(defaultCourses);
      console.log(
        "Datos por defecto de cursoCategoria insertados exitosamente."
      );
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = seedCourses;
