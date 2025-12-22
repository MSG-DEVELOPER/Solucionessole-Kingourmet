// src/components/settingsPageComponents/settingsGrid/handlers/handleDeleteRow.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { deleteFestivo } from "../../../../services/festivos/deleteFestivos";
import { getFestivos } from "../../../../services/festivos/getFestivos";
import { setFestivos } from "../../../../redux/slices/festive/festiveSlice";

export async function handleDeleteRow(
  row: Record<string, unknown>,
  selectedSetting: string,
  establecimientoId: number,
  dispatch: AppDispatch
): Promise<void> {
  // Extraer el ID desde row._key
  const itemId = row._key as string;
  
  if (!itemId) {
    throw new Error("No se pudo obtener el ID del elemento");
  }

  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    switch (selectedSetting) {
      case "Festivos": {
        // Eliminar el festivo
        await deleteFestivo(token, itemId);
        
        // Refrescar los datos desde el backend
        const festivos = await getFestivos(token, establecimientoId);
        dispatch(setFestivos(festivos));
        
        toast.success("Festivo eliminado correctamente");
        break;
      }
      
      default:
        toast.error("Tipo de ajuste no soportado para eliminar");
        throw new Error("Tipo de ajuste no soportado");
    }
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Error al eliminar el elemento");
    throw error;
  }
}

