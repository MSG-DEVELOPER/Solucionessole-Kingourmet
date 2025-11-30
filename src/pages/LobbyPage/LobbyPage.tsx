import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import { Outlet } from "react-router-dom";
import { LobbyContainer, Content } from "./LobbyPage.styles";

function LobbyPage() {
  return (
    <LobbyContainer>
      <SidebarMenu />

      <Content>
        <Outlet />
      </Content>
    </LobbyContainer>
  );
}

export default LobbyPage;
