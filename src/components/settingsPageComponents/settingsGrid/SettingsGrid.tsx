// SettingsGrid.tsx
import { useState } from "react";
import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";
import { mockData } from "../../../assets/data/mockData";

import DataModal from "../../modals/DataModal/DataModal";

function SettingsGrid() {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Datos de ejemplo por tipo de setting
  // mockData.ts



  function handleOpenModal(title: string) {
    setSelectedSetting(title);
    setModalOpen(true);
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
        title={selectedSetting ?? "Datos"}
        data={selectedSetting ? mockData[selectedSetting] : []}
        showSearchBar
        showFilterIcon
      />
    </>
  );
}

export default SettingsGrid;
