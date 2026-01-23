// src/services/alergenos/getAlergenos.ts

export interface Alergeno {
  id: number;
  nombre: string;
  imagen: string;
  created_at: string;
  updated_at: string;
}

export interface AlergenosResponse {
  alergenos: Alergeno[];
}

export async function getAlergenos(token: string): Promise<Alergeno[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/alergenos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los alérgenos");
  }

  const json: AlergenosResponse = await res.json();
  return json.alergenos;
}
