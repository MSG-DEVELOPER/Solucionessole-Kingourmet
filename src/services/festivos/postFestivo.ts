// src/services/festivos/postFestivo.ts

export interface PostFestivoPayload {
  establecimiento_id: number;
  nombre: string;
  fecha: string;
  cerrado: number;
  tipo: string;
}

export interface PostFestivoResponse {
  message: string;
  data: {
    id: number;
    establecimiento_id: number;
    nombre: string;
    fecha: string;
    fecha_fin: string | null;
    tipo: string;
    es_recurrente: number;
    descripcion: string | null;
    cerrado: number;
    horario_especial: string | null;
    created_at: string;
    updated_at: string;
  };
}

export async function postFestivo(
  token: string,
  payload: PostFestivoPayload
): Promise<PostFestivoResponse> {
  const url = "http://localhost/kingourmet-api/api/festivos";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear el festivo");
  }

  const json = await response.json();
  return json;
}

