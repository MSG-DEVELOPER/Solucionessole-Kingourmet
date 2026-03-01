// src/services/recursos/getRecursos.ts

export interface Recurso {
  id: number;
  nombre: string;
  descripcion: string;
  created_at: string;
  updated_at: string;
}

export async function getRecursos(token: string): Promise<Recurso[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/recursos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los recursos");
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
