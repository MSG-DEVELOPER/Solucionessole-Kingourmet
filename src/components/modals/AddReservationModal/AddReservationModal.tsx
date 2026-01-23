import { useEffect } from "react";
import { useForm } from "react-hook-form";
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
  Form,
  ErrorMessage,
  TimeSelectsContainer,
} from "./AddReservationModal.styles";
import type { CreateReservationPayload } from "../../../services/reservations/postReservation";

interface AddReservationModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: CreateReservationPayload) => Promise<void>;
  establecimientoId: number;
}

type ReservationFormData = {
  nombre: string;
  telefono: string;
  email: string;
  fecha: string;
  hora: string;
  minuto: string;
  comensales: string;
  estado: "Pendiente" | "confirmada";
  notas: string;
};

function AddReservationModal({ open, onClose, onSubmit, establecimientoId }: AddReservationModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    defaultValues: {
      nombre: "",
      telefono: "",
      email: "",
      fecha: "",
      hora: "",
      minuto: "",
      comensales: "",
      estado: "Pendiente",
      notas: "",
    },
  });

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

  // Generar opciones de horas (0-23)
  const hourOptions = Array.from({ length: 24 }, (_, i) => ({
    value: i.toString().padStart(2, "0"),
    label: i.toString().padStart(2, "0"),
  }));

  // Generar opciones de minutos (00, 15, 30, 45)
  const minuteOptions = [
    { value: "00", label: "00" },
    { value: "15", label: "15" },
    { value: "30", label: "30" },
    { value: "45", label: "45" },
  ];

  const onSubmitForm = async (data: ReservationFormData) => {
    // Combinar hora y minuto en formato "HH:MM"
    const horaCompleta = `${data.hora}:${data.minuto}`;

    const payload: CreateReservationPayload = {
      id_establecimiento: establecimientoId,
      sala_id: 1,
      horario_id: 1,
      nombre_cliente: data.nombre,
      telefono_cliente: data.telefono,
      email_cliente: data.email || null,
      comensales: Number(data.comensales),
      fecha: data.fecha,
      hora: `${horaCompleta}:00`,
      notas: data.notas,
    };

    await onSubmit(payload);
    reset();
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
          <Form id="reservation-form" onSubmit={handleSubmit(onSubmitForm)}>
            <Field>
              <Label htmlFor="nombre">Nombre *</Label>
              <Input
                id="nombre"
                placeholder="Nombre del cliente"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
              />
              {errors.nombre && (
                <ErrorMessage>{errors.nombre.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="telefono">Teléfono *</Label>
              <Input
                id="telefono"
                type="tel"
                placeholder="Teléfono del cliente"
                {...register("telefono", {
                  required: "El teléfono es obligatorio",
                })}
              />
              {errors.telefono && (
                <ErrorMessage>{errors.telefono.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email del cliente"
                {...register("email")}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </Field>

            <Field className="date-field">
              <Label htmlFor="fecha">Fecha *</Label>
              <Input
                id="fecha"
                type="date"
                {...register("fecha", {
                  required: "La fecha es obligatoria",
                })}
              />
              {errors.fecha && (
                <ErrorMessage>{errors.fecha.message}</ErrorMessage>
              )}
            </Field>

            <Field className="time-field">
              <Label>Hora *</Label>
              <TimeSelectsContainer>
                <Select
                  {...register("hora", {
                    required: "La hora es obligatoria",
                  })}
                >
                  <option value="">Hora</option>
                  {hourOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                <Select
                  {...register("minuto", {
                    required: "Los minutos son obligatorios",
                  })}
                >
                  <option value="">Min</option>
                  {minuteOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </TimeSelectsContainer>
              {(errors.hora || errors.minuto) && (
                <ErrorMessage>
                  {errors.hora?.message || errors.minuto?.message}
                </ErrorMessage>
              )}
            </Field>

            <Field className="comensales-field">
              <Label htmlFor="comensales">Comensales *</Label>
              <Input
                id="comensales"
                type="number"
                min={1}
                placeholder="Número de comensales"
                {...register("comensales", {
                  required: "El número de comensales es obligatorio",
                  min: {
                    value: 1,
                    message: "Debe haber al menos 1 comensal",
                  },
                })}
              />
              {errors.comensales && (
                <ErrorMessage>{errors.comensales.message}</ErrorMessage>
              )}
            </Field>

            <Field>
              <Label htmlFor="estado">Estado</Label>
              <Select
                id="estado"
                {...register("estado")}
              >
                <option value="Pendiente">Pendiente</option>
                <option value="confirmada">Confirmada</option>
              </Select>
            </Field>

            <Field>
              <Label htmlFor="notas">Notas</Label>
              <TextArea
                id="notas"
                placeholder="Alergias, indicaciones especiales..."
                {...register("notas")}
              />
            </Field>
          </Form>
        </Body>

        <Actions>
          <SecondaryButton onClick={onClose}>Cancelar</SecondaryButton>
          <PrimaryButton
            type="submit"
            form="reservation-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Guardando..." : "Aceptar"}
          </PrimaryButton>
        </Actions>
      </ModalCard>
    </Overlay>
  );
}

export default AddReservationModal;
