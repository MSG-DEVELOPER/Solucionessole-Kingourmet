// GET /api/reservas/:id — detalle ampliado (ignoramos mesas/historial en UI de momento)

export interface ReservationDetail {
  id: number;
  fecha: string;
  hora: string;
  comensales: number;
  pago: string;
  notas: string | null;
  ocasion_especial: string | null;
  codigo_reserva: string;
  cancelado: boolean | number;
  motivo_cancelacion: string;
  fecha_cancelacion: string | null;
  confirmado_cliente: boolean | number;
  created_at: string;
  updated_at: string;
  id_establecimiento: number;
  id_sala: number;
  id_horario: number;
  atendido_por: number | null;
  id_cliente: number | null;
  id_estado: number;
  establecimiento_nombre?: string;
  sala_nombre?: string;
  horario_nombre?: string;
  horario_inicio?: string;
  horario_fin?: string;
  usuario_nombre?: string;
  usuario_email?: string;
  estado_nombre?: string;
  color_fondo?: string;
  color_texto?: string;
  cliente_nombre?: string;
  cliente_email?: string;
  cliente_telefono?: string;
  mesas?: unknown[];
  historial?: unknown[];
}

export async function getReservationById(
  token: string,
  id: number
): Promise<ReservationDetail> {
  const res = await fetch(
    `http://localhost/kingourmet-api/api/reservas/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error al obtener el detalle de la reserva");
  }

  return res.json() as Promise<ReservationDetail>;
}
