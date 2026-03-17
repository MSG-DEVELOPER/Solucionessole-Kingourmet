// src/services/config/getConfig.ts

export interface ConfigResponse {
    message: string;
    data?: Record<string, unknown>;
  }
  
  export async function getConfig(token: string): Promise<ConfigResponse> {
    const res = await fetch(`http://localhost/kingourmet-api/api/configuracion`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  
    if (res.status !== 200) {
      throw new Error("Error al obtener la configuración");
    }
  
    const json = await res.json();
    return json;
  }

