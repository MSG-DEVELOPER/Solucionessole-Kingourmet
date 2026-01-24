// src/services/alergenos/updateAlergeno.ts

export interface UpdateAlergenoPayload {
  nombre: string;
}

export interface UpdateAlergenoResponse {
  message: string;
  alergeno: {
    id: number;
    nombre: string;
    imagen: string;
    created_at: string;
    updated_at: string;
  };
}

export async function updateAlergeno(
  token: string,
  id: string,
  payload: UpdateAlergenoPayload
): Promise<UpdateAlergenoResponse> {
  const url = `http://localhost/kingourmet-api/api/alergenos/${id}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorMessage = response.status === 401 
      ? "Sesión expirada. Por favor, inicia sesión nuevamente"
      : response.status === 500
      ? "Error del servidor. Intenta más tarde"
      : "Error al actualizar el alérgeno";
    
    throw new Error(errorMessage);
  }

  return await response.json();
}
