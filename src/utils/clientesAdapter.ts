// src/utils/clientesAdapter.ts
import type { Cliente } from "../services/clientes/getClientes";

export function clientesToTableData(clientes?: Cliente[]) {
  if (!clientes || clientes.length === 0) return [];

  return clientes.map((cliente) => ({
    _key: cliente.id.toString(),
    Nombre: cliente.nombre,
    Apellidos: cliente.apellidos,
    Email: cliente.email,
    Teléfono: cliente.telefono,
  }));
}
