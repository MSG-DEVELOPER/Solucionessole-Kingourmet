// src/services/permissions/updatePermissionByRole.ts

export interface UpdatePermissionPayload {
  crear: number;
  leer: number;
  actualizar: number;
  eliminar: number;
}

export async function updatePermissionByRole(
  token: string,
  id_rol: number,
  id_recurso: number,
  payload: UpdatePermissionPayload
): Promise<void> {
  const url = `http://localhost/kingourmet-api/api/permisos/${id_rol}/rol/${id_recurso}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorMessage =
      response.status === 401
        ? "Sesión expirada. Por favor, inicia sesión nuevamente"
        : response.status === 500
          ? "Error del servidor. Intenta más tarde"
          : "Error al actualizar el permiso";

    throw new Error(errorMessage);
  }
}
