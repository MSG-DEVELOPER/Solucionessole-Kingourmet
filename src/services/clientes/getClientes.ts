// src/services/clientes/getClientes.ts

export interface Cliente {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  created_at: string;
  updated_at: string;
  id_establecimiento: number;
}



export async function getClientes(token: string): Promise<Cliente[]> {
  const res = await fetch("http://localhost/kingourmet-api/api/clientes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener los clientes");
  }

  const json: Cliente[] = await res.json();
  return json;
}
