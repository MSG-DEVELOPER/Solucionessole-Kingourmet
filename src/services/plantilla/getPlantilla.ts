// src/services/plantilla/getPlantilla.ts

export interface Usuario {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  estado: string;
  ultimo_acceso: string;
  notas: string | null;
  rol_nombre: string;
  id_establecimiento: number;
  id_rol: number;
  created_at: string;
  updated_at: string;
}

export async function getPlantilla(token: string): Promise<Usuario[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener la plantilla");
  }

  const data = await res.json();
  return Array.isArray(data) ? (data as Usuario[]) : [];
}

