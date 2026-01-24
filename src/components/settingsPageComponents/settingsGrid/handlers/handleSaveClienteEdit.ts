// src/components/settingsPageComponents/settingsGrid/handlers/handleSaveClienteEdit.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { updateCliente } from "../../../../services/clientes/updateCliente";
import { getClientes } from "../../../../services/clientes/getClientes";
import { setClientes } from "../../../../redux/slices/clientes/clientesSlice";

export async function handleSaveClienteEdit(
  id: string,
  changedValues: Record<string, string>,
  dispatch: AppDispatch
): Promise<void> {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    await updateCliente(token, id, changedValues);
    
    // Refrescar la lista de clientes desde el backend
    const clientes = await getClientes(token);
    dispatch(setClientes(clientes));
    
    toast.success("Cliente actualizado correctamente");
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Error al actualizar el cliente");
    throw error;
  }
}
