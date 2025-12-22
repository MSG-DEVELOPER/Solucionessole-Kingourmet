// Convierte los datos de festivos de Redux al formato de tabla

import type { Festivo } from "../redux/slices/festive/festiveSlice";

const festivoLabels: Record<string, string> = {
  nombre: "Nombre",
  fecha: "Fecha",
  fecha_fin: "Fin",
  tipo: "Tipo",
  es_recurrente: "Recurrente",
  descripcion: "Descripción",
  cerrado: "Cerrado",
  horario_especial: "Horario",
};

export function festivosToTableData(festivos?: Festivo[]) {
  if (!festivos || festivos.length === 0) return [];

  return festivos.map((festivo) => {
    const row: Record<string, unknown> = {
      _key: festivo.id.toString(), // clave real para identificar el festivo
    };

    // Mapear cada campo con su label
    Object.entries(festivoLabels).forEach(([key, label]) => {
      const value = festivo[key as keyof Festivo];
      
      // Formatear valores especiales
      if (key === "es_recurrente" || key === "cerrado") {
        row[label] = value === 1 ? "Sí" : "No";
      } else if (value === null || value === undefined) {
        row[label] = "-";
      } else {
        row[label] = value;
      }
    });

    return row;
  });
}

