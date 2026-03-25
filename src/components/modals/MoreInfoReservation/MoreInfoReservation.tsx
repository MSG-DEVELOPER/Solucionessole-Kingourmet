import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import {
  getReservationById,
  type ReservationDetail,
} from "../../../services/reservations/getReservationById";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  IconWrapper,
  ModalTitle,
  ModalContent,
  DetailList,
  DetailRow,
  DetailLabel,
  DetailValue,
  ModalMessage,
  LoadingCenter,
  ActionButton,
} from "./MoreInfoReservation.styles";
import Spinner from "../../spinner/Spinner";

function fmt(v: string | number | boolean | null | undefined): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "boolean") return v ? "Sí" : "No";
  if (typeof v === "string" && !v.trim()) return "—";
  return String(v);
}

function formatHora(hora?: string) {
  if (!hora) return "—";
  return hora.length >= 5 ? hora.slice(0, 5) : hora;
}

interface MoreInfoReservationProps {
  open: boolean;
  onClose: () => void;
  reservationId: number | null;
}

export default function MoreInfoReservation({
  open,
  onClose,
  reservationId,
}: MoreInfoReservationProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ReservationDetail | null>(null);

  useEffect(() => {
    if (!open || reservationId == null) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
      setError("No hay sesión");
      setData(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);
    setData(null);

    getReservationById(token, reservationId)
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {
        if (!cancelled) {
          setError("No se pudo cargar el detalle de la reserva.");
          setData(null);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [open, reservationId]);

  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar modal">
          ×
        </CloseButton>

        <ModalHeader>
          <IconWrapper>
            <CalendarDays aria-hidden />
          </IconWrapper>
          <ModalTitle>Detalle de la reserva</ModalTitle>
        </ModalHeader>

        <ModalContent>
          {loading && (
            <LoadingCenter>
              <Spinner />
            </LoadingCenter>
          )}
          {!loading && error && <ModalMessage>{error}</ModalMessage>}
          {!loading && !error && data && (
            <DetailList>
              <DetailRow>
                <DetailLabel>Código</DetailLabel>
                <DetailValue>{fmt(data.codigo_reserva)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Fecha</DetailLabel>
                <DetailValue>{fmt(data.fecha)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Hora</DetailLabel>
                <DetailValue>{formatHora(data.hora)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Comensales</DetailLabel>
                <DetailValue>{fmt(data.comensales)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Pago</DetailLabel>
                <DetailValue>{fmt(data.pago)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Estado</DetailLabel>
                <DetailValue>{fmt(data.estado_nombre)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Establecimiento</DetailLabel>
                <DetailValue>{fmt(data.establecimiento_nombre)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Sala</DetailLabel>
                <DetailValue>{fmt(data.sala_nombre)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Horario</DetailLabel>
                <DetailValue>
                  {data.horario_nombre
                    ? `${data.horario_nombre} (${formatHora(data.horario_inicio)} – ${formatHora(data.horario_fin)})`
                    : "—"}
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Cliente</DetailLabel>
                <DetailValue>{fmt(data.cliente_nombre)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Email cliente</DetailLabel>
                <DetailValue>{fmt(data.cliente_email)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Tel. cliente</DetailLabel>
                <DetailValue>{fmt(data.cliente_telefono)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Usuario</DetailLabel>
                <DetailValue>{fmt(data.usuario_nombre)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Email usuario</DetailLabel>
                <DetailValue>{fmt(data.usuario_email)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Notas</DetailLabel>
                <DetailValue>{fmt(data.notas)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Ocasión</DetailLabel>
                <DetailValue>{fmt(data.ocasion_especial)}</DetailValue>
              </DetailRow>
            </DetailList>
          )}
        </ModalContent>

        <ActionButton type="button" onClick={onClose}>
          Entendido
        </ActionButton>
      </ModalContainer>
    </ModalOverlay>
  );
}
