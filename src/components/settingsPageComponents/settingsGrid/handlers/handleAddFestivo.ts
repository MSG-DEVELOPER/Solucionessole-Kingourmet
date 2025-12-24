// src/components/settingsPageComponents/settingsGrid/handlers/handleAddFestivo.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postFestivo } from "../../../../services/festivos/postFestivo";
import { getFestivos } from "../../../../services/festivos/getFestivos";
import { setFestivos } from "../../../../redux/slices/festive/festiveSlice";

export async function handleAddFestivo(
  values: Record<string, string>,
  establecimientoId: number,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    // Construir el payload
    const payload = {
      establecimiento_id: establecimientoId,
      nombre: values.nombre,
      fecha: values.fecha,
      cerrado: Number(values.cerrado), // Convertir string "1" o "0" a número
      tipo: values.tipo,
    };

    // Crear el festivo
    await postFestivo(token, payload);

    // Refrescar los datos desde el backend
    const festivos = await getFestivos(token, establecimientoId);
    console.log("🔍 Festivos recibidos del backend después de crear:", festivos);
    console.log("🔍 Festivo creado (fecha enviada):", values.fecha);
    dispatch(setFestivos(festivos));

    toast.success("Festivo creado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear el festivo"
    );
    throw error;
  }
}

