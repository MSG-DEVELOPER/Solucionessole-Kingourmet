import type { AddField } from "../components/modals/DataModal/addRowModal/AddRowModal";

export type AddSchemaKey = "Festivos" | "Alérgenos";

export const addSchemas: Record<AddSchemaKey, AddField[]> = {
  Festivos: [
    { key: "nombre", label: "Nombre", type: "text", required: true },
    { key: "fecha", label: "Fecha", type: "date", required: true },
    {
      key: "tipo",
      label: "Tipo",
      type: "select",
      required: true,
      options: [
        { label: "Nacional", value: "nacional" },
        { label: "Local", value: "local" },
        { label: "Propio", value: "propio" },
      ],
    },
    {
      key: "cerrado",
      label: "Cerrado",
      type: "select",
      required: true,
      options: [
        { label: "Sí", value: "1" },
        { label: "No", value: "0" },
      ],
    },
  ],
  Alérgenos: [
    { key: "nombre", label: "Nombre", type: "text", required: true },
    { key: "descripcion", label: "Descripción", type: "text", required: true },
  ],
};

