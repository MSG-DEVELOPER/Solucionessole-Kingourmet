// src/services/alergenos/deleteAlergeno.ts

export async function deleteAlergeno(
  token: string,
  id: string
): Promise<void> {
  const url = `http://localhost/kingourmet-api/api/alergenos/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el alérgeno");
  }
}

