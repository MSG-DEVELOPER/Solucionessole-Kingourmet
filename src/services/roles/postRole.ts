// src/services/roles/postRole.ts

export interface PostRolePayload {
  nombre: string;
  descripcion: string;
  permitir_borrar: 1;
}

export async function postRole(
  token: string,
  payload: PostRolePayload
): Promise<unknown> {
  try {
    const response = await fetch("http://localhost/kingourmet-api/api/roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.status !== 200 && response.status !== 201) {
      throw new Error("Error al crear el rol");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error al crear el rol");
  }
}
