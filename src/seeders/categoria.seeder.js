const Categoria = require("../models/Categoria.model");

const defaultCategories = [
  {
    nombre: "Informatica",
    descripcion: "Categoria de informatica",
    padre_id: null,
  },
  {
    nombre: "Quimica",
    descripcion: "Categoria de quimica",
    padre_id: null,
  },
  {
    nombre: "Contabilidad",
    descripcion: "Categoria de contabilidad",
    padre_id: null,
  },
  {
    nombre: "Mecanica",
    descripcion: "Categoria de mecanica",
    padre_id: null,
  },
  {
    nombre: "Programacion",
    descripcion: "Categoria de programacion",
    padre_id: 1,
  },
  {
    nombre: "Base de datos",
    descripcion: "Categoria de base de datos",
    padre_id: 1,
  },
  {
    nombre: "Redes",
    descripcion: "Categoria de redes",
    padre_id: 1,
  },
  {
    nombre: "Fisica",
    descripcion: "Categoria de fisica",
    padre_id: 2,
  },
  {
    nombre: "Quimica organica",
    descripcion: "Categoria de quimica organica",
    padre_id: 2,
  },
  {
    nombre: "Quimica inorganica",
    descripcion: "Categoria de quimica inorganica",
    padre_id: 2,
  },
];

async function seedCategories() {
  try {
    // Sincroniza el modelo Categoria
    await Categoria.sync();

    // Verifica si ya existen categorias en la base de datos
    const existingCategories = await Categoria.findAll();

    // Si no hay categorias en la base de datos, inserta los datos por defecto
    if (existingCategories.length === 0) {
      await Categoria.bulkCreate(defaultCategories);
      console.log("Datos por defecto de categoria insertados exitosamente.");
    } else {
      console.log("Ya existen datos de categoria en la base de datos.");
    }
  } catch (error) {
    console.error("Error al insertar datos por defecto de categoria:", error);
  }
}

module.exports = seedCategories;
