// src/services/alergenos/postAlergeno.ts

export interface PostAlergenoPayload {
  nombre: string;
  descripcion: string;
  icono: string;
}

export interface PostAlergenoResponse {
  message?: string;
  data?: {
    id: number;
    nombre: string;
    descripcion: string;
    icono: string;
    imagen: string;
    created_at: string;
    updated_at: string;
  };
}

export async function postAlergeno(
  token: string,
  payload: PostAlergenoPayload
): Promise<PostAlergenoResponse> {
  const url = "http://localhost/kingourmet-api/api/alergenos";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear el alérgeno");
  }

  const json = await response.json();
  return json;
}
