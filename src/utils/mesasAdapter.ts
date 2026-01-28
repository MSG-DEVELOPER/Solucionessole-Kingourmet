// src/utils/mesasAdapter.ts
import type { Mesa } from "../services/mesas/getMesas";

export function mesasToTableData(mesas?: Mesa[]) {
  if (!mesas || mesas.length === 0) return [];

  return mesas.map((mesa) => ({
    _key: mesa.id.toString(),
    "Num Mesa": mesa.numero_mesa,
    Estado: mesa.estado,
    Sala: mesa.id_sala.toString(),
    Min: mesa.capacidad_minima.toString(),
    Max: mesa.capacidad_maxima.toString(),
    Combinable: mesa.es_combinable === 1 ? "Sí" : "No",
    Union: mesa.capacidad_union.toString(),
    Notas: mesa.notas ?? "",
  }));
}
