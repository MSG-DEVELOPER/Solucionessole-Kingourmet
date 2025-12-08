
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
  SubmitButton,
  GridTwo,
} from "./SignupForm.style";

interface SignupFormProps {
  onClose: () => void;
}

interface SignupFormData {
  restaurantName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  seats: string;
}

function SignupForm({ onClose }: SignupFormProps) {
  const { register, handleSubmit, reset } = useForm<SignupFormData>();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const onSubmit = () => {
    alert("Formulario enviado");
    reset();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Cerrar modal">
          ×
        </CloseButton>

        <ModalHeader>
          <ModalTitle>Crear cuenta para tu restaurante</ModalTitle>
        </ModalHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="restaurantName">Nombre del restaurante</Label>
            <Input
              id="restaurantName"
              type="text"
              placeholder="Ej. La Cuina de Marga"
              {...register("restaurantName", { required: true })}
            />
          </FormGroup>

          <GridTwo>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@restaurante.com"
                {...register("email", { required: true })}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+34 600 000 000"
                {...register("phone")}
              />
            </FormGroup>
          </GridTwo>

          <GridTwo>
            <FormGroup>
              <Label htmlFor="city">Ciudad</Label>
              <Input
                id="city"
                type="text"
                placeholder="Barcelona"
                {...register("city")}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="country">País</Label>
              <Input
                id="country"
                type="text"
                placeholder="España"
                {...register("country")}
              />
            </FormGroup>
          </GridTwo>

          <FormGroup>
            <Label htmlFor="seats">Capacidad (mesas o comensales)</Label>
            <Input
              id="seats"
              type="text"
              placeholder="Ej. 60 comensales"
              {...register("seats")}
            />
          </FormGroup>

          <SubmitButton type="submit">Enviar solicitud</SubmitButton>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default SignupForm;