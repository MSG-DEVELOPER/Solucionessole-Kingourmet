// src/services/festivos/getFestivos.ts

export interface Festivo {
  id: number;
  establecimiento_id: number;
  nombre: string;
  fecha: string;
  fecha_fin: string | null;
  tipo: string;
  es_recurrente: number;
  descripcion: string | null;
  cerrado: number;
  horario_especial: string | null;
  created_at: string;
  updated_at: string;
}

export async function getFestivos(
  token: string,
  establecimientoId: number | null
): Promise<Festivo[]> {
  const res = await fetch(
    `http://localhost/kingourmet-api/api/festivos/establecimiento/${establecimientoId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }
  );

  if (res.status !== 200) {
    throw new Error("Error al obtener los festivos");
  }

  const json = await res.json();
  return json;
}

