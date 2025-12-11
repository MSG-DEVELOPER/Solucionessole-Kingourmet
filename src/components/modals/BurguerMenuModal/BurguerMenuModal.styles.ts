import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Overlay = styled.div`
  position: fixed;
  top: 64px; /* Empieza debajo de la navbar (padding sm + botón 44px + padding sm ≈ 64px) */
  left: 0;
  width: 100vw; /* Ocupa todo el ancho */
  height: calc(100vh - 64px); /* Altura total menos altura de navbar */
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999; /* Por encima del contenido pero la navbar (z-index: 100) queda visible */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto; /* Permite scroll si el contenido es largo */
  overflow-x: hidden;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing.md};
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray200};
  opacity: 0.9;

  /* Desenfatiza ligeramente el badge para dar jerarquía a las opciones */
  > *:not(button) {
    max-width: 260px;
    transform: scale(0.96);
    filter: saturate(0.85);
    box-shadow: ${(props) => props.theme.shadows.light};
  }
`;

export const MenuCard = styled.nav`
  width: min(420px, 92vw);
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.gray200};
  border-radius: ${(props) => props.theme.borderRadius.xl};
  box-shadow: ${(props) => props.theme.shadows.heavy};
  padding: ${(props) => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray700};
  letter-spacing: -0.3px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
  padding-top: ${(props) => props.theme.spacing.sm};
`;

export const NavItem = styled.li`
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  width: 100%;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colors.gray700};
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.gray300};
  transition: ${(props) => props.theme.transitions.fast};
  font-weight: 700;
  box-shadow: ${(props) => props.theme.shadows.light};

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.colors.blue600};
  }

  &:hover {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.blue100} 0%,
      ${(props) => props.theme.colors.blue200} 100%
    );
    border-color: ${(props) => props.theme.colors.blue300};
    box-shadow: ${(props) => props.theme.shadows.medium};
    transform: translateY(-1px);
  }

  &.active {
    background: ${(props) => props.theme.colors.blue100};
    border-color: ${(props) => props.theme.colors.blue400};
    color: ${(props) => props.theme.colors.blue800};
    box-shadow: ${(props) => props.theme.shadows.medium};

    svg {
      color: ${(props) => props.theme.colors.blue800};
    }
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  background: ${(props) => props.theme.colors.gray100};
  border: 1px solid ${(props) => props.theme.colors.gray200};
`;

export const LogoutButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.colors.red700};
  box-shadow: none;
  transition: ${(props) => props.theme.transitions.fast};
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    stroke-width: 2.25;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
    background: transparent;
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16);
  }
`;
