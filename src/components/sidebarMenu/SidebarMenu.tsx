import { NavLink } from "react-router-dom";
import { Settings, User, UtensilsCrossed } from "lucide-react";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  IconWrapper,
  SidebarFooter,
  FooterLogo,
} from "./SidebarMenu.styles";
import UserBadge from "./userBadge/UserBadge";
import logoKG from "../../assets/icons/logoKG.svg";

function SidebarMenu() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>La Cuina de Marga</SidebarTitle>
      </SidebarHeader>

      <SidebarList>
        <SidebarItem>
          <NavLink to="restaurant">
            <IconWrapper>
              <UtensilsCrossed />
            </IconWrapper>
            Restaurant
          </NavLink>
        </SidebarItem>

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

      <SidebarFooter>
        <UserBadge />
        <FooterLogo src={logoKG} alt="Logo Kingourmet" />
      </SidebarFooter>
    </SidebarContainer>
  );
}

export default SidebarMenu;
