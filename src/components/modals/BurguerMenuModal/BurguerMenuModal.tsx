import { useEffect } from "react";
import { Settings, User, UtensilsCrossed } from "lucide-react";
import {
  Overlay,
  MenuCard,
  MenuHeader,
  NavList,
  NavItem,
  StyledNavLink,
  IconWrapper,
} from "./BurguerMenuModal.styles";
import UserBadge from "../../sidebarMenu/userBadge/UserBadge";

function BurguerMenuModal() {
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
        </NavList>
      </MenuCard>
    </Overlay>
  );
}

export default BurguerMenuModal;
