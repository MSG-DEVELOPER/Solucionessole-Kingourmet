// hace switch entre los datos del establecimiento de la base de datos y los datos de la tabla

import type { EstablishmentData } from "../redux/slices/establishment/establishmentSlice";

const establishmentLabels: Record<string, string> = {
  nombre: "Nombre",
  direccion: "Dirección",
  telefono: "Teléfono",
  email: "Email",
  descripcion: "Descripción",
 
  capacidad_total: "Capacidad total",
};

const allowedKeys = Object.keys(establishmentLabels);

export function establishmentToTableData(
  establishment?: EstablishmentData
) {
  if (!establishment) return [];

  return Object.entries(establishment)
    .filter(([key]) => allowedKeys.includes(key))
    .map(([key, value]) => ({
      _key: key, // clave real
      Parámetro: establishmentLabels[key] ?? key,
      Valor: value ?? "-",
    }));
}
