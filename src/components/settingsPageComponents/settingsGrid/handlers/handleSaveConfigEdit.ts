// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveConfigEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { updateConfig } from "../../../../services/config/updateConfig";
import { getConfig } from "../../../../services/config/getConfig";
import { setConfig } from "../../../../redux/slices/config/configSlice";
import { resolveConfigValueType } from "../../../../utils/resolveConfigValueType";

export async function handleSaveConfigEdit(
  key: string,
  newValue: string,
  establecimientoId: number,
  dispatch: AppDispatch
): Promise<void> {
  const endpoint = "kingourmet-api/api/configuracion";
  const url = `http://localhost/${endpoint}/${establecimientoId}/${key}`;
  
  const payload = {
    valor: newValue,
    tipo: resolveConfigValueType(key),
  };

  try {
    await updateConfig(url, payload);
    
    const token = sessionStorage.getItem("token");
    if (!token) {
      throw new Error("Token no encontrado");
    }
    
    const configResponse = await getConfig(token, establecimientoId);
    if (configResponse.data) {
      dispatch(setConfig(configResponse.data));
    }
    
    toast.success("Configuración actualizada correctamente");
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Error al guardar la configuración");
    throw error;
  }
}

