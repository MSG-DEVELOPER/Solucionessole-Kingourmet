import type { AddField } from "../components/modals/DataModal/addRowModal/AddRowModal";

export type AddSchemaKey = "Festivos" | "Alérgenos" | "Clientes" | "Mesas" | "Salas";

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
  Clientes: [
    { key: "nombre", label: "Nombre", type: "text", required: true },
    { key: "apellidos", label: "Apellidos", type: "text", required: true },
    { key: "email", label: "Email", type: "email", required: true },
    { key: "telefono", label: "Teléfono", type: "text", required: true },
  ],
  Mesas: [
    { key: "numero_mesa", label: "Num Mesa", type: "text", required: true },
    { key: "id_sala", label: "Sala", type: "text", required: true },
    { key: "capacidad_minima", label: "Capacidad Mínima", type: "text", required: true },
    { key: "capacidad_maxima", label: "Capacidad Máxima", type: "text", required: true },
    { key: "capacidad_union", label: "Capacidad Unión", type: "text", required: true },
    {
      key: "estado",
      label: "Estado",
      type: "select",
      required: true,
      options: [
        { label: "Disponible", value: "disponible" },
      ],
    },
    {
      key: "es_combinable",
      label: "Combinable",
      type: "select",
      required: true,
      options: [
        { label: "Sí", value: "Sí" },
        { label: "No", value: "No" },
      ],
    },
    { key: "notas", label: "Notas", type: "text", required: false },
  ],
  Salas: [
    { key: "nombre", label: "Nombre", type: "text", required: true },
    { key: "descripcion", label: "Descripción", type: "text", required: false },
    { key: "capacidad_maxima", label: "Capacidad máx.", type: "text", required: true },
    {
      key: "estado",
      label: "Estado",
      type: "select",
      required: true,
      options: [
        { label: "activa", value: "activa" },
        { label: "inactiva", value: "inactiva" },
        { label: "mantenimiento", value: "mantenimiento" },
      ],
    },
    { key: "orden", label: "Orden", type: "text", required: true },
    { key: "id_horario", label: "Horario (id)", type: "text", required: true },
  ],
};

