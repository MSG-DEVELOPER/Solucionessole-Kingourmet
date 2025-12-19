// SettingsGrid.tsx, el orquestador de la pagina de settings
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import type { RootState } from "../../../redux/store";
import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";
import { mockData } from "../../../assets/data/mockData";
import DataModal from "../../modals/DataModal/DataModal";
import EditRowModal from "../../modals/DataModal/editRowModal/EditRowModal";
import { configToTableData } from "../../../utils/configAdapters";
import { establishmentToTableData } from "../../../utils/establishmentAdapter";
import { handleSaveConfigEdit } from "./handlers/handleSaveConfigEdit";
import { handleSaveEstablishmentEdit } from "./handlers/handleSaveEstablishmentEdit";

function SettingsGrid() {
  const dispatch = useDispatch();
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  // lectura
  const [tableModalOpen, setTableModalOpen] = useState(false);
  // edición
  const [rowBeingEdited, setRowBeingEdited] = useState<{
    Parámetro: string;
    Valor: unknown;
    _key?: string;
  } | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  // 👉 config desde redux para cuando entras a Ajustes generales
  const config = useSelector((state: RootState) => state.config.data);
  const establishment = useSelector((state: RootState) => state.establishment.data);
  // establecimientoId desde redux para cuando entras a Ajustes generales y tienes que enviar el establecimientoId por URl
  const establecimientoId = useSelector(
    (state: RootState) => state.auth.establecimientoId
  );

  function handleOpenModal(title: string) {
    setSelectedSetting(title);
    setTableModalOpen(true);
  }

  function resolveData() {
    //helper que te dice los datos de la tabla a renderizar
    if (!selectedSetting) return [];

    if (selectedSetting === "Ajustes Generales") {
      if (!config) return [];
      return configToTableData(config);

    }else if (selectedSetting === "Establecimiento") {
      if (!establishment) return [];
      return establishmentToTableData(establishment);
    }

    return mockData[selectedSetting] ?? [];
  }

  function handleEditRow(row: Record<string, unknown>) {
    //pàra editar una fila en tablas que solo tengan la accion editar
    setRowBeingEdited(
      row as {
        Parámetro: string;
        Valor: unknown;
        _key?: string;
      }
    );
    setEditModalOpen(true);
  }

  function resolveRowActions(row: Record<string, unknown>) {
    return [
      {
        label: "Editar",
        onClick: () => handleEditRow(row),
      },
    ];
  }

  async function handleSaveEdit(key: string, newValue: string) {
    if (!selectedSetting || !establecimientoId) return;

    switch (selectedSetting) {
      case "Ajustes Generales":
        return handleSaveConfigEdit(key, newValue, establecimientoId, dispatch);
      
      case "Establecimiento":
        return handleSaveEstablishmentEdit(key, newValue, establecimientoId, dispatch);
      
      default:
        toast.error("Tipo de ajuste no soportado");
    }
  }

  return (
    <>
      <GridContainer>
        {settingsData.map(
          (
            item,
            index //renderizamos los items del grid, los botones
          ) => (
            <SettingsItem
              key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              onClick={() => handleOpenModal(item.title)}
            />
          )
        )}
      </GridContainer>

      {/* Modal global */}
      <DataModal //modal global que contiene la tabla
        isOpen={tableModalOpen}
        onClose={() => setTableModalOpen(false)}
        title={selectedSetting ?? ""}
        data={resolveData()} //datos de la tabla a renderizar
        showSearchBar
        showFilterIcon
        rowActions={resolveRowActions} //actions para la fila clickada
      />
      {/* Modal de edición de fila,este se puede reutilizar para cualquier tabla que SOLO tenga la accion editar y un solo campo,clave-valor */}
      <EditRowModal
        key={rowBeingEdited?._key ?? "edit-modal"}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        row={rowBeingEdited} //datos de la fila a editar
        onSave={handleSaveEdit} //funcion que se ejecuta cuando le das al boton guardar en el modal de edición de fila
      />
    </>
  );
}

export default SettingsGrid;
