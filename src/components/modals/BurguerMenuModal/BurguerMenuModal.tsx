import { useEffect } from "react";
import { Settings, User, UtensilsCrossed, Power, BookOpenCheck } from "lucide-react";
import {
  Overlay,
  MenuCard,
  MenuHeader,
  NavList,
  NavItem,
  StyledNavLink,
  IconWrapper,
  LogoutButton,
} from "./BurguerMenuModal.styles";
import UserBadge from "../../sidebarMenu/userBadge/UserBadge";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/auth/authSlice";
import type { AppDispatch } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function BurguerMenuModal() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Sesión cerrada correctamente");
    navigate("/");
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <Overlay>
      <MenuCard>
        <MenuHeader>
          <LogoutButton type="button" onClick={handleLogout} aria-label="Logout">
            <Power />
          </LogoutButton>
          <UserBadge />
        </MenuHeader>
        <NavList>
          <NavItem>
            <StyledNavLink to="restaurant">
              <IconWrapper>
                <UtensilsCrossed />
              </IconWrapper>
              Restaurant
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="settings">
              <IconWrapper>
                <Settings />
              </IconWrapper>
              Settings
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="account">
              <IconWrapper>
                <User />
              </IconWrapper>
              Account
            </StyledNavLink>
          </NavItem>

          <NavItem>
            <StyledNavLink to="faqs">
              <IconWrapper>
                <BookOpenCheck />
              </IconWrapper>
              FAQS
            </StyledNavLink>
          </NavItem>
        </NavList>
      </MenuCard>
    </Overlay>
  );
}

export default BurguerMenuModal;
