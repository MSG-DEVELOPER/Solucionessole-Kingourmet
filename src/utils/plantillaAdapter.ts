// src/utils/plantillaAdapter.ts

import type { Usuario } from "../services/plantilla/getPlantilla";

export function plantillaToTableData(usuarios?: Usuario[]) {
  if (!usuarios || usuarios.length === 0) return [];

  return usuarios.map((u) => ({
    _key: u.id.toString(),
    Nombre: u.nombre,
    Apellidos: u.apellidos,
    Email: u.email,
    Teléfono: u.telefono,
    Estado: u.estado,
    "Último acceso": u.ultimo_acceso,
    ROL: u.rol_nombre,
  }));
}

