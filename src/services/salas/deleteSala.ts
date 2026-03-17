// src/services/salas/deleteSala.ts

export async function deleteSala(
  token: string,
  id: string
): Promise<void> {
  const url = `http://localhost/kingourmet-api/api/salas/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error al eliminar la sala");
  }
}

