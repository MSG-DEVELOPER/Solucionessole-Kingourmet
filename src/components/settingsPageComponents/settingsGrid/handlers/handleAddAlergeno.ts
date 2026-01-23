// src/components/settingsPageComponents/settingsGrid/handlers/handleAddAlergeno.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postAlergeno } from "../../../../services/alergenos/postAlergeno";
import { getAlergenos } from "../../../../services/alergenos/getAlergenos";
import { setAlergenos } from "../../../../redux/slices/alergenos/alergenosSlice";

export async function handleAddAlergeno(
  values: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    // Construir el payload con icono hardcodeado
    const payload = {
      nombre: values.nombre,
      descripcion: values.descripcion,
      icono: "fa-circle", // Hardcodeado por defecto
    };

    // Crear el alérgeno
    await postAlergeno(token, payload);

    // Refrescar los datos desde el backend
    const alergenos = await getAlergenos(token);
    dispatch(setAlergenos(alergenos));

    toast.success("Alérgeno creado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear el alérgeno"
    );
    throw error;
  }
}
