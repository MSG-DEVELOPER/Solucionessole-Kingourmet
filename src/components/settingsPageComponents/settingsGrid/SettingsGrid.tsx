// SettingsGrid.tsx
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";

import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";
import { mockData } from "../../../assets/data/mockData";

import DataModal from "../../modals/DataModal/DataModal";
import { genericActions } from "../../../assets/data/rowActions";

import { configToTableData } from "../../../utils/configAdapters";

function SettingsGrid() {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // 👉 config desde redux
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

  function resolveRowActions(row: any) {
    if (selectedSetting === "Ajustes Generales") {
      return [
        {
          label: "Editar",
          onClick: () => {
            alert(
              `Editar configuración\n\nCampo: ${row.label}\nValor actual: ${row.value}\nKey: ${row.key}`
            );
          },
        },
      ];
    }

    return genericActions;
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
    </>
  );
}

export default SettingsGrid;
