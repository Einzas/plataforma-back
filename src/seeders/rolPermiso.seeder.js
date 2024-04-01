const RolePermission = require("../models/rolPermiso.model");

const defaultRolePermissions = [
  {
    id_rol: 1,
    id_permiso: 1,
  },
  {
    id_rol: 1,
    id_permiso: 2,
  },
  {
    id_rol: 1,
    id_permiso: 3,
  },
  {
    id_rol: 1,
    id_permiso: 4,
  },
  {
    id_rol: 1,
    id_permiso: 5,
  },
  {
    id_rol: 1,
    id_permiso: 6,
  },
  {
    id_rol: 1,
    id_permiso: 7,
  },
  {
    id_rol: 1,
    id_permiso: 8,
  },
  {
    id_rol: 1,
    id_permiso: 9,
  },
  {
    id_rol: 1,
    id_permiso: 10,
  },
  {
    id_rol: 1,
    id_permiso: 11,
  },
  {
    id_rol: 1,
    id_permiso: 12,
  },
  {
    id_rol: 1,
    id_permiso: 13,
  },
  {
    id_rol: 1,
    id_permiso: 14,
  },
  {
    id_rol: 1,
    id_permiso: 15,
  },
  {
    id_rol: 1,
    id_permiso: 16,
  },
];

async function seedRolePermissions() {
  try {
    await RolePermission.sync();
    const existingRolePermissions = await RolePermission.findAll();
    if (existingRolePermissions.length === 0) {
      await RolePermission.bulkCreate(defaultRolePermissions);
      console.log("Default role permissions inserted successfully.");
    } else {
      console.log("Role permissions already exist in the database.");
    }
  } catch (error) {
    console.error("Error inserting default role permissions:", error);
  }
}

module.exports = seedRolePermissions;
