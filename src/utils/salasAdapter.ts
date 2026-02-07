// src/utils/salasAdapter.ts
import type { Sala } from "../services/salas/getSalas";

export function salasToTableData(salas?: Sala[]) {
  if (!salas || salas.length === 0) return [];

  return salas.map((sala) => ({
    _key: sala.id.toString(),
    Nombre: sala.nombre,
    Descripción: sala.descripcion ?? "",
    Max: sala.capacidad_maxima.toString(),
    Estado: sala.estado,
    Horario: sala.id_horario.toString(),
  }));
}
