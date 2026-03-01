// src/utils/permissionUtils.ts

/**
 * Convierte el valor numérico del permiso (0/1) en etiqueta para mostrar.
 */
export function permissionValueToLabel(value: number): string {
  return value === 1 ? "Sí" : "No";
}
