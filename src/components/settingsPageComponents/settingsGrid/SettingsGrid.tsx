import { settingsData } from "../../../assets/data/settingsData";
import SettingsItem from "../settingsItem/SettingsItem";
import { GridContainer } from "./SettingsGrid.styles";

function SettingsGrid() {
  return (
    <GridContainer>
      {settingsData.map(function (item, index) {
        return (
          <SettingsItem
            key={index}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        );
      })}
    </GridContainer>
  );
}

export default SettingsGrid;
