// src/adapters/configAdapter.ts

type ConfigData = Record<string, any>;

const configLabels: Record<string, string> = {
  duracion_media_reserva: "Duración media de la reserva (min)",
  tiempo_buffer: "Tiempo buffer entre reservas (min)",
  anticipacion_minima: "Anticipación mínima (min)",
  anticipacion_maxima: "Anticipación máxima (min)",
  permitir_reservas_simultaneas: "Permitir reservas simultáneas",
  max_comensales_por_reserva: "Máx. comensales por reserva",
  min_comensales_por_reserva: "Mín. comensales por reserva",
  tiempo_cortesia: "Tiempo de cortesía (min)",
  email_reservas: "Email de reservas",
  permitir_reservas_online: "Permitir reservas online",
  max_comensales_online: "Máx. comensales online",
  politica_cancelacion: "Política de cancelación",
  dias_anticipacion_max: "Días de anticipación máxima",
  dias_anticipacion_min: "Días de anticipación mínima",
};

export function configToTableData(config?: ConfigData) {
  if (!config) return [];

  return Object.entries(config).map(([key, value]) => ({
    Parámetro: configLabels[key] ?? key,
    Valor: value ?? "-",
  }));
}
