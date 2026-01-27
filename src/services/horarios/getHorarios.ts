// src/services/horarios/getHorarios.ts

export interface Horario {
  id: number;
  nombre: string;
  descripcion: string | null;
  hora_inicio: string;
  hora_fin: string;
  estado: string;
  created_at: string;
  updated_at: string;
  id_establecimiento: number;
}

export async function getHorarios(token: string): Promise<Horario[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/horarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los horarios");
  }

  const json: Horario[] = await res.json();
  return json;
}

