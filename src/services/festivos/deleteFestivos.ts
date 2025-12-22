// src/services/festivos/deleteFestivos.ts

export async function deleteFestivo(
  token: string,
  festivoId: string
): Promise<void> {
  const url = `http://localhost/kingourmet-api/api/festivos/${festivoId}`;
  
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    throw new Error("Error al eliminar el festivo");
  }
}

