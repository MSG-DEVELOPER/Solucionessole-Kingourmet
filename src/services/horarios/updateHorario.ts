// src/services/horarios/updateHorario.ts

export interface UpdateHorarioPayload {
  nombre?: string;
  descripcion?: string | null;
  hora_inicio?: string; // "13:00:00"
  hora_fin?: string; // "23:30:00"
  estado?: string; // "activo" | "inactivo"
}

export interface UpdateHorarioResponse {
  message: string;
  horario: {
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

export async function updateHorario(
  token: string,
  id: string,
  payload: UpdateHorarioPayload
): Promise<UpdateHorarioResponse> {
  const url = `http://localhost/kingourmet-api/api/horarios/${id}`;

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
        : "Error al actualizar el horario";

    throw new Error(errorMessage);
  }

  return await response.json();
}

