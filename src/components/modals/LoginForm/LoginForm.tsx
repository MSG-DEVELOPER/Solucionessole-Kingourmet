import { useForm } from "react-hook-form";
import { useEffect } from "react";
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
  SubmitButton,
} from "./LoginForm.styles";

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onClose: () => void;
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Por ahora solo mostramos en consola
  };

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar modal">
          ×
        </CloseButton>

        <ModalHeader>
          <ModalTitle>Iniciar sesión</ModalTitle>
        </ModalHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              {...register("email", { required: true })}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
            />
          </FormGroup>

          <SubmitButton type="submit">Entrar</SubmitButton>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
}
