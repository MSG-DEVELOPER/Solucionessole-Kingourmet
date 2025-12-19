// src/services/config/updateConfig.ts

export interface ConfigResponse {
  message: string;
  data?: Record<string, unknown>;
}

export interface UpdateConfigPayload {
  valor: string | number | boolean;
  tipo: "string" | "number" | "boolean";
}

export async function updateConfig(url: string, payload: UpdateConfigPayload): Promise<ConfigResponse> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Sesión expirada. Por favor, inicia sesión nuevamente");
  }

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorMessage = response.status === 401 
        ? "Sesión expirada. Por favor, inicia sesión nuevamente"
        : response.status === 500
        ? "Error del servidor. Intenta más tarde"
        : "Error al actualizar la configuración";
      
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error al actualizar la configuración");
  }
}

