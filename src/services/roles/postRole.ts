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

    // Acepta cualquier 2xx como éxito
    if (!response.ok) {
      throw new Error("Error al crear el rol");
    }

    // Si el backend devuelve body JSON, lo intentamos parsear,
    // pero si falla no consideramos que la creación haya fallado.
    const text = await response.text();
    if (!text) return null;

    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error al crear el rol");
  }
}
