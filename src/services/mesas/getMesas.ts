// src/services/mesas/getMesas.ts

export interface Mesa {
  id: number;
  numero_mesa: string;
  capacidad_minima: number;
  capacidad_maxima: number;
  capacidad_union: number;
  estado: string;
  es_combinable: number;
  notas: string | null;
  id_sala: number;
  created_at: string;
  updated_at: string;
}

export async function getMesas(token: string): Promise<Mesa[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/mesas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener las mesas");
  }

  const json: Mesa[] = await res.json();
  return json;
}
