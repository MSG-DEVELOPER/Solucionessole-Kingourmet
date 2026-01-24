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
} from "./EditMultiFieldModal.styles";

type FieldType = "text" | "date" | "select" | "email";

export interface EditField {
  key: string;
  label: string;
  type: FieldType;
  value: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}

interface EditMultiFieldModalProps {
  open: boolean;
  title?: string;
  fields: EditField[];
  onClose: () => void;
  onSubmit: (changedValues: Record<string, string>) => void;
}

type FormData = Record<string, string>;

function EditMultiFieldModal({
  open,
  title = "Editar registro",
  fields,
  onClose,
  onSubmit,
}: EditMultiFieldModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // Cargar valores iniciales cuando se abre el modal
  useEffect(() => {
    if (open) {
      const defaultValues: FormData = {};
      fields.forEach((field) => {
        defaultValues[field.key] = field.value;
      });
      reset(defaultValues);
    }
  }, [open, fields, reset]);

  const onSubmitForm = (data: FormData) => {
    // Detectar solo los campos que cambiaron
    const changedValues: Record<string, string> = {};
    
    fields.forEach((field) => {
      if (data[field.key] !== field.value) {
        changedValues[field.key] = data[field.key];
      }
    });

    // Si no hay cambios, no hacemos nada
    if (Object.keys(changedValues).length === 0) {
      onClose();
      return;
    }

    onSubmit(changedValues);
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
          <Form id="edit-multi-field-form" onSubmit={handleSubmit(onSubmitForm)}>
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
          <PrimaryButton type="submit" form="edit-multi-field-form">
            Guardar cambios
          </PrimaryButton>
        </Footer>
      </ModalCard>
    </ModalOverlay>
  );
}

export default EditMultiFieldModal;
