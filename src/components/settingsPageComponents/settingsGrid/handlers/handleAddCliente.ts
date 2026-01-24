// src/components/settingsPageComponents/settingsGrid/handlers/handleAddCliente.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { postCliente } from "../../../../services/clientes/postCliente";
import { getClientes } from "../../../../services/clientes/getClientes";
import { setClientes } from "../../../../redux/slices/clientes/clientesSlice";

export async function handleAddCliente(
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
      apellidos: values.apellidos,
      email: values.email,
      telefono: values.telefono,
    };

    await postCliente(token, payload);
    const clientes = await getClientes(token);
    dispatch(setClientes(clientes));
    toast.success("Cliente creado correctamente");
  } catch (error) {
    toast.error(
      error instanceof Error ? error.message : "Error al crear el cliente"
    );
    throw error;
  }
}
