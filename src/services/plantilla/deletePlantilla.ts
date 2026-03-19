// src/services/plantilla/deletePlantilla.ts

export async function deletePlantilla(
  token: string,
  id: string
): Promise<void> {
  const url = `http://localhost/kingourmet-api/api/usuarios/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el usuario");
  }
}

