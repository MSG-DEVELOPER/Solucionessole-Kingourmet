import { useForm } from "react-hook-form";
import {
  Overlay,
  Card,
  Header,
  CloseButton,
  Body,
  Form,
  Field,
  Label,
  Input,
  Footer,
  PrimaryButton,
  SecondaryButton,
} from "./RolesPageAddRole.styles";

export interface AddRoleFormData {
  nombre: string;
  descripcion: string;
}

interface RolesPageAddRoleProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: AddRoleFormData) => void;
}

function RolesPageAddRole({
  open,
  onClose,
  onSubmit: onSubmitProp,
}: RolesPageAddRoleProps) {
  const { register, handleSubmit, reset } = useForm<AddRoleFormData>();

  const onSubmit = (data: AddRoleFormData) => {
    onSubmitProp?.(data);
    reset();
    onClose();
  };

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <Card onClick={(e) => e.stopPropagation()}>
        <Header>
          <h3>Añadir rol</h3>
          <CloseButton type="button" onClick={onClose} aria-label="Cerrar">
            ×
          </CloseButton>
        </Header>

        <Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Field>
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                type="text"
                {...register("nombre", { required: true })}
                placeholder="Nombre del rol"
              />
            </Field>
            <Field>
              <Label htmlFor="descripcion">Descripción</Label>
              <Input
                id="descripcion"
                type="text"
                {...register("descripcion")}
                placeholder="Descripción del rol"
              />
            </Field>

            <Footer>
              <SecondaryButton type="button" onClick={onClose}>
                Cancelar
              </SecondaryButton>
              <PrimaryButton type="submit">Guardar</PrimaryButton>
            </Footer>
          </Form>
        </Body>
      </Card>
    </Overlay>
  );
}

export default RolesPageAddRole;
