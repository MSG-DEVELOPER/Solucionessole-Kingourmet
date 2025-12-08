// SettingsGrid.tsx
import { useState } from "react";
import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";
import { mockData } from "../../../assets/data/mockData";

import DataModal from "../../modals/DataModal/DataModal";
import { genericActions, productActions } from "../../../assets/data/rowActions";

function SettingsGrid() {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

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
        title={selectedSetting ?? ""}
        data={selectedSetting ? mockData[selectedSetting] : []}
        showSearchBar
        showFilterIcon
        rowActions={() => {
          if (selectedSetting === "Reservas") return genericActions;
          if (selectedSetting === "Clientes") return genericActions;
          if (selectedSetting === "Mesas") return genericActions;
          if (selectedSetting === "Horarios") return genericActions;
          if (selectedSetting === "Duraciones") return genericActions;
          if (selectedSetting === "Aperturas") return genericActions;
          if (selectedSetting === "Plantillas") return genericActions;
          if (selectedSetting === "Integraciones") return genericActions;
          if (selectedSetting === "Seguridad") return genericActions;
          if (selectedSetting === "Idioma y Región") return genericActions;
          if (selectedSetting === "Estadísticas") return genericActions;
          if (selectedSetting === "Ajustes Generales") return productActions;
          return [];
        }}
      />
    </>
  );
}

export default SettingsGrid;
