// src/components/settingsPageComponents/settingsGrid/handlers/handleAddSala.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postSala } from "../../../../services/salas/postSala";
import { getSalas } from "../../../../services/salas/getSalas";
import { setSalas } from "../../../../redux/slices/salas/salasSlice";

export async function handleAddSala(
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
      capacidad_maxima: parseInt(values.capacidad_maxima, 10),
      descripcion: values.descripcion ?? "",
      estado: values.estado,
      orden: parseInt(values.orden, 10),
      id_horario: parseInt(values.id_horario, 10),
    };

    await postSala(token, payload);
    const salas = await getSalas(token);
    dispatch(setSalas(salas));
    toast.success("Sala creada correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear la sala"
    );
    throw error;
  }
}
