// src/utils/salasAdapter.ts
import type { Sala } from "../services/salas/getSalas";

import type { Horario } from "../services/horarios/getHorarios";

export function salasToTableData(salas?: Sala[], horarios?: Horario[]) {
  if (!salas || salas.length === 0) return [];

  const horarioNombreById = new Map<number, string>(
    (horarios ?? []).map((h) => [h.id, h.nombre])
  );

  return salas.map((sala) => ({
    _key: sala.id.toString(),
    Nombre: sala.nombre,
    Descripción: sala.descripcion ?? "",
    Max: sala.capacidad_maxima.toString(),
    Estado: sala.estado,
    Horario: horarioNombreById.get(sala.id_horario) ?? sala.id_horario.toString(),
    _HorarioId: sala.id_horario.toString(),
  }));
}
