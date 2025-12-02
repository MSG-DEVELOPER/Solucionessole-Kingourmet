import { SettingsPageContainer } from "./SettingsPage.styles";
import SettingsGrid from "../../components/settingsPageComponents/settingsGrid/SettingsGrid";

function SettingsPage() {
  return (
    <SettingsPageContainer>
        <SettingsGrid /> 
      <h1>Settings</h1>
    </SettingsPageContainer>
  );
}

export default SettingsPage;
