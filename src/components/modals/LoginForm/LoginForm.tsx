import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "sonner";
import { login } from "../../../services/auth/authService";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../redux/slices/auth/authSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data);
      // Guardar token en sessionStorage
      sessionStorage.setItem("token", response.token);
      // Aquí enviamos los datos al store global (sin el token)
      dispatch(
        setCredentials({
          user: response.user,
          establecimientoId: response.user.id_establecimiento ?? 0,
        })
      );
      toast.success("Inicio de sesión exitoso");
      navigate("/lobby");
    } catch (e) {
      if (e instanceof Error && e.message === "Credenciales") {
        toast.error("Credenciales incorrectas");
      } else {
        toast.error("Error al iniciar sesión");
      }
    }
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
