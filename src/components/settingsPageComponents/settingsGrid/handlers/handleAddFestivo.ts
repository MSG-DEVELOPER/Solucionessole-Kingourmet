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
    const payload = {
      id_establecimiento: establecimientoId,
      nombre: values.nombre,
      fecha_inicio: values.fecha_inicio,
      fecha_fin: values.fecha_fin,
      cerrado: Number(values.cerrado),
      tipo: values.tipo,
    };

    // Crear el festivo
    await postFestivo(token, payload);

    // Refrescar los datos desde el backend
    const festivos = await getFestivos(token);
    console.log("🔍 Festivos recibidos del backend después de crear:", festivos);
    console.log("🔍 Festivo creado (fechas enviadas):", values.fecha_inicio, values.fecha_fin);
    dispatch(setFestivos(festivos));

    toast.success("Festivo creado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear el festivo"
    );
    throw error;
  }
}

