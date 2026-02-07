// src/services/roles/deleteRole.ts

export async function deleteRole(token: string, id: number): Promise<void> {
  try {
    const response = await fetch(
      `http://localhost/kingourmet-api/api/roles/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error al eliminar el rol");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error al eliminar el rol");
  }
}
