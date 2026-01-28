// src/components/settingsPageComponents/settingsGrid/handlers/handleAddMesa.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postMesa } from "../../../../services/mesas/postMesa";
import { getMesas } from "../../../../services/mesas/getMesas";
import { setMesas } from "../../../../redux/slices/mesas/mesasSlice";

export async function handleAddMesa(
  values: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    const payload = {
      id_sala: parseInt(values.id_sala, 10),
      numero_mesa: values.numero_mesa,
      capacidad_maxima: parseInt(values.capacidad_maxima, 10),
      capacidad_minima: parseInt(values.capacidad_minima, 10),
      capacidad_union: parseInt(values.capacidad_union, 10),
      es_combinable: values.es_combinable === "Sí" ? 1 : 0,
      estado: values.estado,
      notas: values.notas || null,
    };

    await postMesa(token, payload);
    const mesas = await getMesas(token);
    dispatch(setMesas(mesas));
    toast.success("Mesa creada correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear la mesa"
    );
    throw error;
  }
}
