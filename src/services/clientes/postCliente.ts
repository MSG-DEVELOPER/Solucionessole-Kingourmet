// src/services/clientes/postCliente.ts

export interface PostClientePayload {
  id_establecimiento: number;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
}

export interface PostClienteResponse {
  message?: string;
  cliente?: {
    id: number;
    id_establecimiento: number;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    created_at: string;
    updated_at: string;
  };
}

export async function postCliente(
  token: string,
  payload: PostClientePayload
): Promise<PostClienteResponse> {
  const url = "http://localhost/kingourmet-api/api/clientes";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200 && response.status !== 201) {
    throw new Error("Error al crear el cliente");
  }

  const json = await response.json();
  return json;
}
