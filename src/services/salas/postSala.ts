// src/services/salas/postSala.ts

export interface PostSalaPayload {
  id_establecimiento: number;
  nombre: string;
  capacidad_maxima: number;
  descripcion: string;
  estado: string;
  orden: number;
  id_horario: number;
}

export interface PostSalaResponse {
  message?: string;
  sala?: {
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
  };
}

export async function postSala(
  token: string,
  payload: PostSalaPayload
): Promise<PostSalaResponse> {
  const url = "http://localhost/kingourmet-api/api/salas";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear la sala");
  }

  const json = await response.json();
  return json;
}
