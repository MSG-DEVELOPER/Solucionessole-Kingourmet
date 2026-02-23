// src/services/salas/updateSala.ts

export interface UpdateSalaPayload {
  nombre?: string;
  descripcion?: string | null;
  capacidad_maxima?: number;
  estado?: string;
  id_horario?: number;
}

export interface UpdateSalaResponse {
  message: string;
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

export async function updateSala(
  token: string,
  id: string,
  payload: UpdateSalaPayload
): Promise<UpdateSalaResponse> {
  const url = `http://localhost/kingourmet-api/api/salas/${id}`;

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
          : "Error al actualizar la sala";

    throw new Error(errorMessage);
  }

  return await response.json();
}
