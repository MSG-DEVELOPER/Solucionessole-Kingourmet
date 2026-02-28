// src/components/settingsPageComponents/settingsGrid/handlers/handleAddHorario.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postHorario } from "../../../../services/horarios/postHorario";
import { getHorarios } from "../../../../services/horarios/getHorarios";
import { setHorarios } from "../../../../redux/slices/horarios/horariosSlice";

export async function handleAddHorario(
  values: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    const payload = {
      nombre: values.nombre,
      hora_inicio: values.hora_inicio,
      hora_fin: values.hora_fin,
      descripcion: values.descripcion || null,
      estado: values.estado || "activo",
    };

    await postHorario(token, payload);
    const horarios = await getHorarios(token);
    dispatch(setHorarios(horarios));
    toast.success("Horario creado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear el horario"
    );
    throw error;
  }
}
