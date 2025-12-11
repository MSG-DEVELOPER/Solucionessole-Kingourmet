export interface Reservation {
    id: number;
    establecimiento_id: number;
    sala_id: number;
    horario_id: number;
    usuario_id: number | null;
    fecha: string;
    hora: string;
    comensales: number;
    duracion_estimada: number;
    estado: string;
    estado_pago: string;
    nombre_cliente: string;
    telefono_cliente: string;
    email_cliente: string;
    notas: string | null;
    alergias: string | null;
    ocasion_especial: string | null;
    codigo_reserva: string;
    codigo_confirmacion: string | null;
    confirmado_por_cliente: number;
    recordatorio_enviado: number;
    hora_llegada: string | null;
    hora_sentado: string | null;
    hora_salida: string | null;
    valoracion: number | null;
    comentario_valoracion: string | null;
    creado_por: number | null;
    cancelado_por: number | null;
    motivo_cancelacion: string | null;
    cancelado_en: string | null;
    created_at: string;
    updated_at: string;
  }
  
  export async function getReservations(): Promise<Reservation[]> {
    const res = await fetch("http://localhost/kingourmet-api/api/reservas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("Error obteniendo las reservas");
    }
  
    const json = await res.json();
    return json;
  }
  