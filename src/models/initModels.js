const Usuario = require("./usuario.model");
const Rol = require("./rol.model");
const Permiso = require("./permiso.model");
const RolPermiso = require("./rolPermiso.model");

const Categoria = require("./Categoria.model");
const Curso = require("./cursos.model");
const CursoCategoria = require("./cursoCategoria.model");
const CursoUsuario = require("./cursoUsuario.model");
const Leccion = require("./Leccion.model");
const LeccionUsuario = require("./LeccionUsuario.model");
const Contenido = require("./Contenido.model");
const Nivel = require("./niveles.model");

const initModels = () => {
  Usuario.belongsTo(Rol, { foreignKey: "id_rol" });
  Rol.hasMany(Usuario, { foreignKey: "id_rol" });

  Rol.belongsToMany(Permiso, {
    through: RolPermiso,
    foreignKey: "id_rol",
  });
  Permiso.belongsToMany(Rol, {
    through: RolPermiso,
    foreignKey: "id_permiso",
  });

  Curso.belongsToMany(Categoria, {
    through: CursoCategoria,
    foreignKey: "id_curso",
  });
  Categoria.belongsToMany(Curso, {
    through: CursoCategoria,
    foreignKey: "id_categoria",
  });

  Usuario.belongsToMany(Curso, {
    through: CursoUsuario,
    foreignKey: "id_usuario",
  });
  Curso.belongsToMany(Usuario, {
    through: CursoUsuario,
    foreignKey: "id_curso",
  });

  Leccion.belongsToMany(Usuario, {
    through: LeccionUsuario,
    foreignKey: "id_leccion",
  });
  Usuario.belongsToMany(Leccion, {
    through: LeccionUsuario,
    foreignKey: "id_usuario",
  });

  Nivel.hasMany(Leccion, { foreignKey: "id_nivel" });
  Leccion.belongsTo(Nivel, { foreignKey: "id_nivel" });

  Leccion.hasMany(Contenido, { foreignKey: "id_leccion" });
  Contenido.belongsTo(Leccion, { foreignKey: "id_leccion" });
};

module.exports = initModels;
