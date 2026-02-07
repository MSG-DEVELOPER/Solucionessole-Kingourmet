// src/services/roles/getRoles.ts

export async function getRoles(token: string) {
  try {
    const response = await fetch("http://localhost/kingourmet-api/api/roles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error al obtener los roles");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error al obtener los roles");
  }
}
