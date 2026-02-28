// src/services/horarios/postHorario.ts

export interface PostHorarioPayload {
  nombre: string;
  hora_inicio: string;
  hora_fin: string;
  descripcion?: string | null;
  estado: string;
}

export interface PostHorarioResponse {
  message?: string;
  horario?: {
    id: number;
    nombre: string;
    descripcion: string | null;
    hora_inicio: string;
    hora_fin: string;
    estado: string;
    created_at: string;
    updated_at: string;
    id_establecimiento: number;
  };
}

export async function postHorario(
  token: string,
  payload: PostHorarioPayload
): Promise<PostHorarioResponse> {
  const url = "http://localhost/kingourmet-api/api/horarios";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear el horario");
  }

  const json = await response.json();
  return json;
}
