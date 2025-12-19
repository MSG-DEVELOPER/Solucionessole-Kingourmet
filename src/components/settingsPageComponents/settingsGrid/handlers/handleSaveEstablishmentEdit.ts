// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveEstablishmentEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { getEstablishment } from "../../../../services/establishment/getEstablishment";
import { setEstablishment } from "../../../../redux/slices/establishment/establishmentSlice";
import { resolveSwitchTitleEndpoint } from "../../../../utils/resolveSwitchTitleEndpoint";

export async function handleSaveEstablishmentEdit(
  key: string,
  newValue: string,
  establecimientoId: number,
  dispatch: AppDispatch
): Promise<void> {
  const endpoint = resolveSwitchTitleEndpoint("Establecimiento");
  if (!endpoint) {
    throw new Error("Endpoint no encontrado para Establecimiento");
  }

  const url = `http://localhost/${endpoint}/${establecimientoId}`;
  
  // Payload simple: solo el campo y su nuevo valor
  const payload: Record<string, string> = {
    [key]: newValue,
  };

  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    // Hacer el PUT
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorMessage = response.status === 401 
        ? "Sesión expirada. Por favor, inicia sesión nuevamente"
        : response.status === 500
        ? "Error del servidor. Intenta más tarde"
        : "Error al actualizar el establecimiento";
      
      throw new Error(errorMessage);
    }

    // Refrescar datos desde el backend
    const establishmentData = await getEstablishment(token, establecimientoId);
    dispatch(setEstablishment(establishmentData));
    
    toast.success("Establecimiento actualizado correctamente");
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Error al guardar el establecimiento");
    throw error;
  }
}

