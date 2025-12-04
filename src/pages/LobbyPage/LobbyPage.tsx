import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import BurguerMenu from "../../components/burguerMenu/BurguerMenu";
import { Outlet } from "react-router-dom";
import { LobbyContainer, Content } from "./LobbyPage.styles";

function LobbyPage() {
  return (
    <div>
      <BurguerMenu />
      <LobbyContainer>
        <SidebarMenu />

        <Content>
          <Outlet />
        </Content>
      </LobbyContainer>
    </div>
  );
}

export default LobbyPage;
