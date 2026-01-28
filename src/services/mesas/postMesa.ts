// src/services/mesas/postMesa.ts

export interface PostMesaPayload {
  id_sala: number;
  numero_mesa: string;
  capacidad_maxima: number;
  capacidad_minima: number;
  capacidad_union: number;
  es_combinable: number;
  estado: string;
  notas?: string | null;
}

export interface PostMesaResponse {
  message?: string;
  mesa?: {
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
  };
}

export async function postMesa(
  token: string,
  payload: PostMesaPayload
): Promise<PostMesaResponse> {
  const url = "http://localhost/kingourmet-api/api/mesas";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear la mesa");
  }

  const json = await response.json();
  return json;
}
