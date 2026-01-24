// src/services/clientes/updateCliente.ts

export interface UpdateClientePayload {
  nombre?: string;
  apellidos?: string;
  email?: string;
  telefono?: string;
}

export interface UpdateClienteResponse {
  message: string;
  cliente: {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    created_at: string;
    updated_at: string;
    id_establecimiento: number;
  };
}

export async function updateCliente(
  token: string,
  id: string,
  payload: UpdateClientePayload
): Promise<UpdateClienteResponse> {
  const url = `http://localhost/kingourmet-api/api/clientes/${id}`;

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
      : "Error al actualizar el cliente";
    
    throw new Error(errorMessage);
  }

  return await response.json();
}
