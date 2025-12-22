// src/utils/configTypeResolver.ts
//En la peticion a la bbdd para hacer el put se tiene que mandar en el body el tipo de dato qu es
export type ConfigValueType = "number" | "boolean" | "string";

const CONFIG_TYPES: Record<string, ConfigValueType> = {
  duracion_media_reserva: "number",
  tiempo_buffer: "number",
  anticipacion_minima: "number",
  anticipacion_maxima: "number",
  max_comensales_por_reserva: "number",
  min_comensales_por_reserva: "number",
  tiempo_cortesia: "number",
  max_comensales_online: "number",
  dias_anticipacion_max: "number",
  dias_anticipacion_min: "number",
  duracion_reserva: "number",

  permitir_reservas_simultaneas: "boolean",
  permitir_reservas_online: "boolean",

  email_reservas: "string",
  politica_cancelacion: "string",
};

export function resolveConfigValueType(key: string): ConfigValueType {
  return CONFIG_TYPES[key] ?? "string";
}
