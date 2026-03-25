// src/services/reservations/getReservations.ts

export interface ReservationEstado {
  estado_nombre: string;
  color_fondo: string;
  color_texto: string;
}

// Shape real que devuelve el backend en GET /api/reservas.
// Nota: algunos campos antiguos pueden seguir existiendo; por eso varios son opcionales.
export interface Reservation {
  id: number;
  fecha: string; // YYYY-MM-DD
  hora: string; // HH:mm:ss
  comensales: number;
  pago: string; // "pendiente", "pagado", etc.
  notas: string | null;
  ocasion_especial: string | null;
  codigo_reserva: string;
  cancelado: number; // 0/1
  motivo_cancelacion: string;
  fecha_cancelacion: string | null;
  confirmado_cliente: number; // 0/1
  created_at: string;
  updated_at: string;
  id_establecimiento: number;
  id_sala: number;
  id_horario: number;
  atendido_por: number | null;
  id_cliente: number | null;
  id_estado: number;
  // El backend envía un JSON stringify con {estado_nombre, color_fondo, color_texto}
  estado: string;

  // Campos legacy / opcionales si el backend los incluyera
  nombre_cliente?: string;
  telefono_cliente?: string;
  email_cliente?: string;
}

export function parseReservationEstado(raw: string): ReservationEstado | null {
  try {
    const parsed = JSON.parse(raw) as Partial<ReservationEstado>;
    if (
      typeof parsed?.estado_nombre === "string" &&
      typeof parsed?.color_fondo === "string" &&
      typeof parsed?.color_texto === "string"
    ) {
      return parsed as ReservationEstado;
    }
    return null;
  } catch {
    return null;
  }
}
  
  export async function getReservations(): Promise<Reservation[]> {
    const token = sessionStorage.getItem("token");

    const res = await fetch("http://localhost/kingourmet-api/api/reservas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  
    if (!res.ok) {
      throw new Error("Error obteniendo las reservas");
    }
  
    const json = await res.json();
    return Array.isArray(json) ? (json as Reservation[]) : [];
  }

