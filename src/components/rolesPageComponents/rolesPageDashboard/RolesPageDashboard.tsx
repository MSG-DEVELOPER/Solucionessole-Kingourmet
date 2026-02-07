import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getRoles } from "../../../services/roles/getRoles";
import { postRole } from "../../../services/roles/postRole";
import { deleteRole } from "../../../services/roles/deleteRole";
import RolesPageModal from "../rolesPageModal/RolesPageModal";
import type { Role } from "../rolesPageModal/RolesPageModal";
import RolesPageAddRole from "../rolesPageAddRole/RolesPageAddRole";
import type { AddRoleFormData } from "../rolesPageAddRole/RolesPageAddRole";

function RolesPageDashboard() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [addRoleOpen, setAddRoleOpen] = useState(false);

  useEffect(() => {
    loadRoles();

    async function loadRoles() {
      const token = sessionStorage.getItem("token");
      if (!token) return;
      try {
        const response = await getRoles(token);
        setRoles(response.roles ?? []);
      } catch {
        console.error("Error al cargar roles");
      }
    }
  }, []);

  function handleAddRole() {
    setAddRoleOpen(true);
  }

  async function handleAddRoleSubmit(data: AddRoleFormData) {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("No hay sesión");
      return;
    }
    try {
      await postRole(token, {
        nombre: data.nombre,
        descripcion: data.descripcion,
        permitir_borrar: 1,
      });
      toast.success("Rol creado");
      setAddRoleOpen(false);
      const response = await getRoles(token);
      setRoles(response.roles ?? []);
    } catch {
      toast.error("Error al crear el rol");
    }
  }

  async function handleDeleteRole(id: number) {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("No hay sesión");
      return;
    }
    try {
      await deleteRole(token, id);
      toast.success("Rol eliminado");
      const response = await getRoles(token);
      setRoles(response.roles ?? []);
    } catch {
      toast.error("Error al eliminar el rol");
    }
  }

  return (
    <div>
      <RolesPageModal
        roles={roles}
        onAdd={handleAddRole}
        onDeleteRole={handleDeleteRole}
      />
      <RolesPageAddRole
        open={addRoleOpen}
        onClose={() => setAddRoleOpen(false)}
        onSubmit={handleAddRoleSubmit}
      />
    </div>
  );
}

export default RolesPageDashboard;
