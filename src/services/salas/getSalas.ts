// src/services/salas/getSalas.ts

export interface Sala {
  id: number;
  nombre: string;
  descripcion: string | null;
  capacidad_maxima: number;
  estado: string;
  orden: number;
  created_at: string;
  updated_at: string;
  id_establecimiento: number;
  id_horario: number;
}

export async function getSalas(token: string): Promise<Sala[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/salas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener las salas");
  }

  const json: Sala[] = await res.json();
  return json;
}
