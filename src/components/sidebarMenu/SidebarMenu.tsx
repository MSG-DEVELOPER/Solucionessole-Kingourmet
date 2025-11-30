import { NavLink } from "react-router-dom";
import { Settings, User } from "lucide-react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  IconWrapper,
} from "./SidebarMenu.styles";

function SidebarMenu() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>Menú</SidebarTitle>
      </SidebarHeader>
      <SidebarList>
        <SidebarItem>
          <NavLink to="settings">
            <IconWrapper>
              <Settings />
            </IconWrapper>
            Settings
          </NavLink>
        </SidebarItem>

        <SidebarItem>
          <NavLink to="account">
            <IconWrapper>
              <User />
            </IconWrapper>
            Account
          </NavLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
}

export default SidebarMenu;
