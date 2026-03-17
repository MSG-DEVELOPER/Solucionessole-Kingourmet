// src/services/horarios/deleteHorario.ts

export async function deleteHorario(
  token: string,
  id: string
): Promise<void> {
  const url = `http://localhost/kingourmet-api/api/horarios/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("No se puede eliminar un horario con salas asignadas");
    }
    throw new Error("Error al eliminar el horario");
  }
}

