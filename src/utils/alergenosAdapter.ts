// src/utils/alergenosAdapter.ts
import type { Alergeno } from "../services/alergenos/getAlergenos";

export function alergenosToTableData(alergenos?: Alergeno[]) {
  if (!alergenos || alergenos.length === 0) return [];

  return alergenos.map((alergeno) => ({
    _key: alergeno.id.toString(),
    Nombre: alergeno.nombre,
  }));
}
