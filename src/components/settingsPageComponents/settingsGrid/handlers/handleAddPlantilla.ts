import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postPlantilla } from "../../../../services/plantilla/postPlantilla";
import { getPlantilla } from "../../../../services/plantilla/getPlantilla";
import { setPlantilla } from "../../../../redux/slices/plantilla/plantillaSlice";

export async function handleAddPlantilla(
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
      apellidos: values.apellidos,
      email: values.email,
      password: values.password,
      id_rol: values.id_rol,
      telefono: values.telefono,
      estado: values.estado,
    };

    await postPlantilla(token, payload);

    const usuarios = await getPlantilla(token);
    dispatch(setPlantilla(usuarios));
    toast.success("Usuario creado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error
        ? error.message
        : "Error al crear el usuario"
    );
    throw error;
  }
}

