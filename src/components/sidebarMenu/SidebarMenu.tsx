import { NavLink } from "react-router-dom";
import { SidebarContainer, SidebarList, SidebarItem } from "./SidebarMenu.styles";

function SidebarMenu() {
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <NavLink to="settings">Settings</NavLink>
        </SidebarItem>

        <SidebarItem>
          <NavLink to="account">Account</NavLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
}

export default SidebarMenu;
