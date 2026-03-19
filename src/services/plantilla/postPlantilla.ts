// src/services/plantilla/postPlantilla.ts

export interface PostPlantillaPayload {
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
  id_rol: string;
  telefono: string;
  estado: string;
}

export interface PostPlantillaResponse {
  message?: string;
  data?: unknown;
}

export async function postPlantilla(
  token: string,
  payload: PostPlantillaPayload
): Promise<PostPlantillaResponse> {
  const url = "http://localhost/kingourmet-api/api/usuarios";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear el usuario");
  }

  const json = await response.json().catch(() => null);
  return json as PostPlantillaResponse;
}

