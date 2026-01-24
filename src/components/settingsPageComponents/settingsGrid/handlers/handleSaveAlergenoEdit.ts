// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveAlergenoEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { updateAlergeno } from "../../../../services/alergenos/updateAlergeno";
import { getAlergenos } from "../../../../services/alergenos/getAlergenos";
import { setAlergenos } from "../../../../redux/slices/alergenos/alergenosSlice";

export async function handleSaveAlergenoEdit(
  key: string,
  newValue: string,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  const payload = {
    nombre: newValue,
  };

  try {
    await updateAlergeno(token, key, payload);
    
    // Refrescar la lista de alérgenos desde el backend
    const alergenos = await getAlergenos(token);
    dispatch(setAlergenos(alergenos));
    
    toast.success("Alérgeno actualizado correctamente");
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Error al actualizar el alérgeno");
    throw error;
  }
}
