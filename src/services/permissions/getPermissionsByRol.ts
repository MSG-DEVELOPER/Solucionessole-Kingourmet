// src/services/permissions/getPermissionsByRol.ts

export interface PermissionByRole {
  id: number;
  crear: number;
  leer: number;
  actualizar: number;
  eliminar: number;
  id_recurso: number;
  id_rol: number;
  created_at: string;
  updated_at: string;
}

export async function getPermissionsByRole(
  token: string,
  id_rol: number
): Promise<PermissionByRole[]> {
  const url = `http://localhost/kingourmet-api/api/permisos?id_rol=${id_rol}`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los permisos del rol");
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
