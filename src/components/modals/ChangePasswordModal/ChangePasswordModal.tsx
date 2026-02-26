import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalTitle,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorText,
  ButtonsRow,
  CancelButton,
  SubmitButton,
} from "./ChangePasswordModal.style";

export interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordModalProps {
  onClose: () => void;
  onSubmit: (data: ChangePasswordFormData) => void | Promise<void>;
}

export default function ChangePasswordModal({
  onClose,
  onSubmit,
}: ChangePasswordModalProps) {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleFormSubmit = async (data: ChangePasswordFormData) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Las contraseñas no coinciden",
      });
      return;
    }
    await onSubmit(data);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar modal">
          ×
        </CloseButton>

        <ModalHeader>
          <ModalTitle>Cambiar contraseña</ModalTitle>
        </ModalHeader>

        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <FormGroup>
            <Label htmlFor="currentPassword">Contraseña actual</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="••••••••"
              {...register("currentPassword", {
                required: "La contraseña actual es obligatoria",
              })}
            />
            {errors.currentPassword && (
              <ErrorText>{errors.currentPassword.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="newPassword">Nueva contraseña</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="••••••••"
              {...register("newPassword", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
            />
            {errors.newPassword && (
              <ErrorText>{errors.newPassword.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Repetir contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword", {
                required: "Repite la contraseña",
                validate: (value) =>
                  value === getValues("newPassword") ||
                  "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </FormGroup>

          <ButtonsRow>
            <CancelButton type="button" onClick={onClose}>
              Cancelar
            </CancelButton>
            <SubmitButton type="submit">Cambiar contraseña</SubmitButton>
          </ButtonsRow>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
}
