import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Settings, User, UtensilsCrossed, Power,BookOpenCheck } from "lucide-react";
import { toast } from "sonner";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  SidebarList,
  SidebarItem,
  LogoutItem,
  IconWrapper,
  SidebarFooter,
  FooterLogo,
} from "./SidebarMenu.styles";
import UserBadge from "./userBadge/UserBadge";
import logoKG from "../../assets/icons/Kingourmet_no_bg.svg";
import { logout } from "../../redux/slices/auth/authSlice";
import { clearConfig } from "../../redux/slices/config/configSlice";
import type { AppDispatch } from "../../redux/store";

function SidebarMenu() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearConfig());
    toast.success("Sesión cerrada correctamente");
    navigate("/");
  };

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

        <SidebarItem>
          <NavLink to="faqs">
            <IconWrapper>
              <BookOpenCheck />
            </IconWrapper>
            FAQS
          </NavLink>
        </SidebarItem>

        <LogoutItem>
          <button type="button" onClick={handleLogout}>
            <IconWrapper>
              <Power />
            </IconWrapper>
            Logout
          </button>
        </LogoutItem>
      </SidebarList>

      <SidebarFooter>
        <UserBadge />
        <FooterLogo src={logoKG} alt="Logo Kingourmet" />
      </SidebarFooter>
    </SidebarContainer>
  );
}

export default SidebarMenu;
