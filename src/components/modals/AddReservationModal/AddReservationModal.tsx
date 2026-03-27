import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import type { RootState } from "../../../redux/store";
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
  ClientSelect,
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
  id_cliente: string;
  fecha: string;
  hora: string;
  minuto: string;
  comensales: string;
  estado: "Pendiente" | "confirmada";
  notas: string;
};

function AddReservationModal({ open, onClose, onSubmit, establecimientoId }: AddReservationModalProps) {
  const clientes = useSelector((state: RootState) => state.clientes.data);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    defaultValues: {
      id_cliente: "",
      fecha: "",
      hora: "",
      minuto: "",
      comensales: "",
      estado: "Pendiente",
      notas: "",
    },
  });

  const idClienteValue = watch("id_cliente");

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    reset({
      id_cliente: "",
      fecha: "",
      hora: "",
      minuto: "",
      comensales: "",
      estado: "Pendiente",
      notas: "",
    });
  }, [open, reset, clientes]);

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
      id_cliente: Number(data.id_cliente),
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
            {clientes.length === 0 ? (
              <Field>
                <Label>Cliente</Label>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b" }}>
                  No hay clientes cargados.
                </p>
              </Field>
            ) : (
              <Field>
                <Label htmlFor="id_cliente">Cliente *</Label>
                <ClientSelect
                  id="id_cliente"
                  className={!idClienteValue ? "placeholder-active" : undefined}
                  {...register("id_cliente", {
                    required: "Selecciona un cliente",
                  })}
                >
                  <option value="">Selecciona cliente</option>
                  {clientes.map((c) => (
                    <option key={c.id} value={String(c.id)}>
                      {`${c.nombre} ${c.apellidos}`.trim()}
                    </option>
                  ))}
                </ClientSelect>
                {errors.id_cliente && (
                  <ErrorMessage>{errors.id_cliente.message}</ErrorMessage>
                )}
              </Field>
            )}

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
            disabled={isSubmitting || clientes.length === 0}
          >
            {isSubmitting ? "Guardando..." : "Aceptar"}
          </PrimaryButton>
        </Actions>
      </ModalCard>
    </Overlay>
  );
}

export default AddReservationModal;
