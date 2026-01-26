import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ModalOverlay,
  ModalCard,
  Header,
  CloseButton,
  Body,
  Field,
  Label,
  Input,
  Select,
  Footer,
  PrimaryButton,
  SecondaryButton,
  ErrorMessage,
  Form,
} from "./AddRowModal.styles";

type FieldType = "text" | "date" | "select" | "email" | "tel";

export interface AddField {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { label: string; value: string }[];
}

interface AddRowModalProps {
  open: boolean;
  title?: string;
  fields: AddField[];
  onClose: () => void;
  onSubmit: (values: Record<string, string>) => void;
}

type FormData = Record<string, string>;

function AddRowModal({
  open,
  title = "Añadir registro",
  fields,
  onClose,
  onSubmit,
}: AddRowModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // Resetear formulario cuando se abre/cierra el modal
  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

  const onSubmitForm = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  if (!open) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>{title}</h3>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>

        <Body>
          <Form id="add-row-form" onSubmit={handleSubmit(onSubmitForm)}>
            {fields.map((field) => (
              <Field key={field.key}>
                <Label htmlFor={field.key}>
                  {field.label}
                  {field.required ? " *" : ""}
                </Label>

                {field.type === "select" ? (
                  <Select
                    id={field.key}
                    {...register(field.key, {
                      required: field.required
                        ? `El campo ${field.label} es obligatorio`
                        : false,
                    })}
                  >
                    <option value="">Selecciona una opción</option>
                    {field.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    id={field.key}
                    type={field.type}
                    {...register(field.key, {
                      required: field.required
                        ? `El campo ${field.label} es obligatorio`
                        : false,
                    })}
                  />
                )}
                {errors[field.key] && (
                  <ErrorMessage>
                    {errors[field.key]?.message as string}
                  </ErrorMessage>
                )}
              </Field>
            ))}
          </Form>
        </Body>

        <Footer>
          <SecondaryButton onClick={onClose}>Cancelar</SecondaryButton>
          <PrimaryButton type="submit" form="add-row-form">
            Guardar
          </PrimaryButton>
        </Footer>
      </ModalCard>
    </ModalOverlay>
  );
}

export default AddRowModal;


