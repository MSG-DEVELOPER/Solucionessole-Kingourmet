// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveMesaEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { updateMesa } from "../../../../services/mesas/updateMesa";
import { getMesas } from "../../../../services/mesas/getMesas";
import { setMesas } from "../../../../redux/slices/mesas/mesasSlice";

export async function handleSaveMesaEdit(
  id: string,
  changedValues: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    // Convertir valores de string a los tipos que espera el backend
    const payload: Record<string, string | number | null> = {};

    for (const [key, value] of Object.entries(changedValues)) {
      if (key === "capacidad_minima" || key === "capacidad_maxima" || key === "capacidad_union" || key === "id_sala") {
        payload[key] = parseInt(value, 10);
      } else if (key === "es_combinable") {
        // Convertir "Sí"/"No" a 1/0
        payload[key] = value === "Sí" ? 1 : 0;
      } else if (key === "notas") {
        payload[key] = value || null;
      } else {
        payload[key] = value;
      }
    }

    await updateMesa(token, id, payload as any);

    const mesas = await getMesas(token);
    dispatch(setMesas(mesas));

    toast.success("Mesa actualizada correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al actualizar la mesa"
    );
    throw error;
  }
}
