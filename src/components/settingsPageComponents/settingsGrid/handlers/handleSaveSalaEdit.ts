// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveSalaEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import {
  updateSala,
  type UpdateSalaPayload,
} from "../../../../services/salas/updateSala";
import { getSalas } from "../../../../services/salas/getSalas";
import { setSalas } from "../../../../redux/slices/salas/salasSlice";

export async function handleSaveSalaEdit(
  id: string,
  changedValues: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    const payload: Record<string, string | number | null> = {};

    for (const [key, value] of Object.entries(changedValues)) {
      if (key === "capacidad_maxima" || key === "id_horario") {
        payload[key] = parseInt(value, 10);
      } else if (key === "descripcion") {
        payload[key] = value || null;
      } else {
        payload[key] = value;
      }
    }

    await updateSala(token, id, payload as UpdateSalaPayload);

    const salas = await getSalas(token);
    dispatch(setSalas(salas));

    toast.success("Sala actualizada correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al actualizar la sala"
    );
    throw error;
  }
}
