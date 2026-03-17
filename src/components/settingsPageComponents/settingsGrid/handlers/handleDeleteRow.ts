// src/components/settingsPageComponents/settingsGrid/handlers/handleDeleteRow.ts
import { toast } from "sonner";
import type { AppDispatch } from "../../../../redux/store";
import { deleteFestivo } from "../../../../services/festivos/deleteFestivos";
import { getFestivos } from "../../../../services/festivos/getFestivos";
import { setFestivos } from "../../../../redux/slices/festive/festiveSlice";
import { deleteAlergeno } from "../../../../services/alergenos/deleteAlergeno";
import { getAlergenos } from "../../../../services/alergenos/getAlergenos";
import { setAlergenos } from "../../../../redux/slices/alergenos/alergenosSlice";
import { deleteHorario } from "../../../../services/horarios/deleteHorario";
import { getHorarios } from "../../../../services/horarios/getHorarios";
import { setHorarios } from "../../../../redux/slices/horarios/horariosSlice";
import { deleteCliente } from "../../../../services/clientes/deleteCliente";
import { getClientes } from "../../../../services/clientes/getClientes";
import { setClientes } from "../../../../redux/slices/clientes/clientesSlice";

export async function handleDeleteRow(
  row: Record<string, unknown>,
  selectedSetting: string,
  establecimientoId: number,
  dispatch: AppDispatch
): Promise<void> {
  // Extraer el ID desde row._key
  const itemId = row._key as string;
  
  if (!itemId) {
    throw new Error("No se pudo obtener el ID del elemento");
  }

  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    switch (selectedSetting) {
      case "Festivos": {
        await deleteFestivo(token, itemId);
        const festivos = await getFestivos(token);
        dispatch(setFestivos(festivos));
        toast.success("Festivo eliminado correctamente");
        break;
      }
      case "Alérgenos": {
        await deleteAlergeno(token, itemId);
        const alergenos = await getAlergenos(token);
        dispatch(setAlergenos(alergenos));
        toast.success("Alérgeno eliminado correctamente");
        break;
      }
      case "Horarios": {
        await deleteHorario(token, itemId);
        const horarios = await getHorarios(token);
        dispatch(setHorarios(horarios));
        toast.success("Horario eliminado correctamente");
        break;
      }
      case "Clientes": {
        await deleteCliente(token, itemId);
        const clientes = await getClientes(token);
        dispatch(setClientes(clientes));
        toast.success("Cliente eliminado correctamente");
        break;
      }
      default:
        toast.error("Tipo de ajuste no soportado para eliminar");
        throw new Error("Tipo de ajuste no soportado");
    }
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Error al eliminar el elemento");
    throw error;
  }
}

