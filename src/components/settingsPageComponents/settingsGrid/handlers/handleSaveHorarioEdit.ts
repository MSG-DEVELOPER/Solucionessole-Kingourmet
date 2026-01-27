// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveHorarioEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { updateHorario } from "../../../../services/horarios/updateHorario";
import { getHorarios } from "../../../../services/horarios/getHorarios";
import { setHorarios } from "../../../../redux/slices/horarios/horariosSlice";

export async function handleSaveHorarioEdit(
  id: string,
  changedValues: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    await updateHorario(token, id, changedValues);

    const horarios = await getHorarios(token);
    dispatch(setHorarios(horarios));

    toast.success("Horario actualizado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al actualizar el horario"
    );
    throw error;
  }
}

