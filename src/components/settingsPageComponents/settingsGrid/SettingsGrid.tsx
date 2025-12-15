// SettingsGrid.tsx
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";
import { mockData } from "../../../assets/data/mockData";
import DataModal from "../../modals/DataModal/DataModal";
import EditRowModal from "../../modals/DataModal/editRowModal/EditRowModal";
import { configToTableData } from "../../../utils/configAdapters";

function SettingsGrid() {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState<{
    Parámetro: string;
    Valor: unknown;
    _key?: string;
  } | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  // 👉 config desde redux para cuando entras a Ajustes generales
  const config = useSelector((state: RootState) => state.config.data);

  function handleOpenModal(title: string) {
    setSelectedSetting(title);
    setModalOpen(true);
  }

  function resolveData() {
    if (!selectedSetting) return [];

    if (selectedSetting === "Ajustes Generales") {
      if (!config) return [];

      return configToTableData(config);
    }

    return mockData[selectedSetting] ?? [];
  }

  function resolveRowActions(row: Record<string, unknown>) {
    return [
      {
        label: "Editar",
        onClick: () => {
          setEditingRow(
            row as {
              Parámetro: string;
              Valor: unknown;
              _key?: string;
            }
          );
          setEditModalOpen(true);
        },
      },
    ];
  }
  
  return (
    <>
      <GridContainer>
        {settingsData.map((item, index) => (
          <SettingsItem
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            onClick={() => handleOpenModal(item.title)}
          />
        ))}
      </GridContainer>

      {/* Modal global */}
      <DataModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedSetting ?? ""}
        data={resolveData()}
        showSearchBar
        showFilterIcon
        rowActions={resolveRowActions}
      />
      {/* Modal de edición de fila */}
      <EditRowModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        row={editingRow}
      />
    </>
  );
}

export default SettingsGrid;
