require("dotenv").config();

const { db } = require("./database/config");

const app = require("./app");
const initModels = require("./models/initModels");
const seedRoles = require("./seeders/rol.seeder");
const seedPermissions = require("./seeders/permiso.seeder");
const seedUsers = require("./seeders/usuario.seeder");
const seedCategories = require("./seeders/categoria.seeder");
const rolPermiso = require("./seeders/rolPermiso.seeder");
const cursoSeed = require("./seeders/curso.seeder");
const nivelSeed = require("./seeders/niveles.seeder");
const leccionSeed = require("./seeders/leccion.seeder");
const LeccionUsuarioSeed = require("./seeders/leccionUsuario.seeder");
db.authenticate()
  .then(() => {
    console.log("Base de datos conectada 😀");
  })
  .catch((err) => {
    console.log("Error de conexión a la base de datos 😞", err);
  });
initModels();

db.sync({
  force: true,
})
  .then(() => {
    console.log("Base de datos sincronizada 😎");
    seedRoles();
    seedPermissions();
    seedUsers();
    seedCategories();
    rolPermiso();
    cursoSeed();
    nivelSeed();
    leccionSeed();
    LeccionUsuarioSeed();
  })
  .catch((err) => {
    console.log("Error al sincronizar la base de datos 😞", err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT} 🚀`);
});
