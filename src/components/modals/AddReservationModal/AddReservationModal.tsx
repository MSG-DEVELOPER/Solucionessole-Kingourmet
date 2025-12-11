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
  Actions,
  SecondaryButton,
  PrimaryButton,
} from "./AddReservationModal.styles";

interface AddReservationModalProps {
  open: boolean;
  onClose: () => void;
}

function AddReservationModal({ open, onClose }: AddReservationModalProps) {
  const [nombre, setNombre] = useState("");
  const [hora, setHora] = useState("");
  const [comensales, setComensales] = useState<number | "">("");

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleCreate = () => {
    alert("reserva creada");
    onClose();
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
            <Label>Hora</Label>
            <Input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
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
        </Body>

        <Actions>
          <SecondaryButton onClick={onClose}>Cancelar</SecondaryButton>
          <PrimaryButton onClick={handleCreate}>Aceptar</PrimaryButton>
        </Actions>
      </ModalCard>
    </Overlay>
  );
}

export default AddReservationModal;
