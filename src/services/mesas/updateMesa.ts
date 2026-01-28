// src/services/mesas/updateMesa.ts

export interface UpdateMesaPayload {
  numero_mesa?: string;
  capacidad_minima?: number;
  capacidad_maxima?: number;
  capacidad_union?: number;
  estado?: string;
  es_combinable?: number;
  notas?: string | null;
  id_sala?: number;
}

export interface UpdateMesaResponse {
  message: string;
  mesa: {
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

export async function updateMesa(
  token: string,
  id: string,
  payload: UpdateMesaPayload
): Promise<UpdateMesaResponse> {
  const url = `http://localhost/kingourmet-api/api/mesas/${id}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorMessage =
      response.status === 401
        ? "Sesión expirada. Por favor, inicia sesión nuevamente"
        : response.status === 500
        ? "Error del servidor. Intenta más tarde"
        : "Error al actualizar la mesa";

    throw new Error(errorMessage);
  }

  return await response.json();
}
