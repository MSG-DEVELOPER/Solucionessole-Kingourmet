// src/utils/horariosAdapter.ts
import type { Horario } from "../services/horarios/getHorarios";

export function horariosToTableData(horarios?: Horario[]) {
  if (!horarios || horarios.length === 0) return [];

  return horarios.map((horario) => ({
    _key: horario.id.toString(),
    Nombre: horario.nombre,
    Descripción: horario.descripcion ?? "",
    Inicio: horario.hora_inicio,
    Fin: horario.hora_fin,
    Estado: horario.estado,
  }));
}

