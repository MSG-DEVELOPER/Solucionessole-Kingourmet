// src/components/rolesPageComponents/rolesPageModal/rolesPageModal.tsx
import { Pencil, Trash, Ban, Plus } from "lucide-react";
import {
  Wrapper,
  Title,
  RolesSubtitle,
  TableCard,
  Table,
  TableRow,
  TableCell,
  CellNombre,
  Th,
  ThRight,
  IconCell,
  RowActionButton,
  AddRoleButton,
} from "./RolesPageModal.styles";

export interface Role {
  id: number;
  nombre: string;
  descripcion: string;
  permitir_borrar: boolean;
}

interface RolesPageModalProps {
  roles: Role[];
  title?: string;
  onAdd?: () => void;
  onDeleteRole?: (id: number) => void;
}

function RolesPageModal({ roles, title = "Roles", onAdd, onDeleteRole }: RolesPageModalProps) {
  const rows = roles.map((role) => {
    return (
      <TableRow key={role.id}>
        <CellNombre>{role.nombre}</CellNombre>
        <TableCell>{role.descripcion}</TableCell>
        <IconCell>
          <RowActionButton type="button" className="icon-pencil" aria-label="Editar rol">
            <Pencil size={22} aria-hidden />
          </RowActionButton>
          {role.permitir_borrar ? (
            <RowActionButton
              type="button"
              className="icon-trash"
              aria-label="Eliminar rol"
              onClick={() => onDeleteRole?.(role.id)}
            >
              <Trash size={22} aria-hidden />
            </RowActionButton>
          ) : (
            <RowActionButton type="button" className="icon-ban" aria-label="No se puede eliminar">
              <Ban size={22} aria-hidden />
            </RowActionButton>
          )}
        </IconCell>
      </TableRow>
    );
  });

  const content = (
    <Wrapper>
      <Title>{title}</Title>
      <RolesSubtitle>Maneja roles y permisos</RolesSubtitle>
      <TableCard>
        <Table>
          <thead>
            <TableRow>
              <Th>&nbsp;</Th>
              <Th>&nbsp;</Th>
              <ThRight>
                {onAdd && (
                  <AddRoleButton type="button" onClick={onAdd} aria-label="Añadir rol">
                    <Plus size={20} aria-hidden />
                  </AddRoleButton>
                )}
              </ThRight>
            </TableRow>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </TableCard>
    </Wrapper>
  );
  return content;
}

export default RolesPageModal;
