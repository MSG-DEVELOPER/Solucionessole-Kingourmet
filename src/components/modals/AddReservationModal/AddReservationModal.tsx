import { useEffect, useState } from "react";
import {
  Overlay,
  ModalCard,
  Header,
  CloseButton,
  Body,
  Field,
  Label,
  Input,
  Select,
  TextArea,
  Actions,
  SecondaryButton,
  PrimaryButton,
} from "./AddReservationModal.styles";
import type { CreateReservationPayload } from "../../../services/reservationsService";

interface AddReservationModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: CreateReservationPayload) => Promise<void>;
}

function AddReservationModal({ open, onClose, onSubmit }: AddReservationModalProps) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  const [comensales, setComensales] = useState<number | "">("");
  const [estado, setEstado] = useState<"Pendiente" | "confirmada">("Pendiente");
  const [notas, setNotas] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleCreate = async () => {
    if (!nombre || !telefono || !hora || !fecha || !comensales) {
      alert("Completa los campos obligatorios");
      return;
    }

    const payload: CreateReservationPayload = {
      establecimiento_id: 1,
      sala_id: 1,
      horario_id: 1,
      nombre_cliente: nombre,
      telefono_cliente: telefono,
      email_cliente: email || null,
      comensales: Number(comensales),
      fecha,
      hora: hora.length === 5 ? `${hora}:00` : hora,
      notas,
    };

    try {
      setSubmitting(true);
      await onSubmit(payload);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <Overlay>
      <ModalCard>
        <Header>
          <h3>Nueva reserva</h3>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </Header>

        <Body>
          <Field>
            <Label>Nombre</Label>
            <Input
              placeholder="Nombre del cliente"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Teléfono</Label>
            <Input
              type="tel"
              placeholder="Teléfono del cliente"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Email del cliente"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Hora</Label>
            <Input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Fecha</Label>
            <Input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Comensales</Label>
            <Input
              type="number"
              min={1}
              placeholder="Número de comensales"
              value={comensales}
              onChange={(e) =>
                setComensales(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </Field>

          <Field>
            <Label>Estado</Label>
            <Select
              value={estado}
              onChange={(e) =>
                setEstado(e.target.value as "Pendiente" | "confirmada")
              }
            >
              <option value="Pendiente">Pendiente</option>
              <option value="confirmada">Confirmada</option>
            </Select>
          </Field>

          <Field>
            <Label>Notas</Label>
            <TextArea
              placeholder="Alergias, indicaciones especiales..."
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
            />
          </Field>
        </Body>

        <Actions>
          <SecondaryButton onClick={onClose}>Cancelar</SecondaryButton>
          <PrimaryButton onClick={handleCreate} disabled={submitting}>
            {submitting ? "Guardando..." : "Aceptar"}
          </PrimaryButton>
        </Actions>
      </ModalCard>
    </Overlay>
  );
}

export default AddReservationModal;
