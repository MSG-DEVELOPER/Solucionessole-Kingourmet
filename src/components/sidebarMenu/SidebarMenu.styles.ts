import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.surface} 0%,
    ${(props) => props.theme.colors.gray100} 100%
  );
  border-right: 1px solid ${(props) => props.theme.colors.gray200};
  box-shadow: ${(props) => props.theme.shadows.medium};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.sm};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 1024px) {
    width: 200px;
    padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.xs};
  }

  @media (max-width: 768px) {
    width: 180px;
  }

  @media (max-width: 480px) {
    display: none;
   
  }

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray100};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray300};
    border-radius: ${(props) => props.theme.borderRadius.sm};

    &:hover {
      background: ${(props) => props.theme.colors.gray400};
    }
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
  padding-bottom: ${(props) => props.theme.spacing.sm};
  border-bottom: 2px solid ${(props) => props.theme.colors.gray200};
`;

export const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.gray700};
  margin: 0;
  letter-spacing: -0.5px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.blue600},
    ${(props) => props.theme.colors.blue800}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: titulo;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
  flex: 1;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.theme.spacing.md};
  transition: ${(props) => props.theme.transitions.fast};
  
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
  }
`;

export const SidebarItem = styled.li`
  position: relative;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray600};
    font-weight: 500;
    font-size: 0.95rem;
    padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
    display: flex;
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    transition: ${(props) => props.theme.transitions.fast};
    position: relative;
    overflow: hidden;
    letter-spacing: 0.3px;
    font-family: cuerpo;

    @media (max-width: 1024px) {
      font-size: 0.9rem;
      padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    }

    @media (max-width: 768px) {
      font-size: 0.85rem;
      padding: ${(props) => props.theme.spacing.sm};
    }

    /* Efecto de fondo sutil */
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 3px;
      background: ${(props) => props.theme.colors.blue600};
      transform: scaleY(0);
      transition: ${(props) => props.theme.transitions.fast};
      border-radius: 0 ${(props) => props.theme.borderRadius.sm} ${(props) => props.theme.borderRadius.sm} 0;
    }

    &:hover {
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.blue100} 0%,
        ${(props) => props.theme.colors.blue200} 100%
      );
      color: ${(props) => props.theme.colors.blue700};
      transform: translateX(4px);
      box-shadow: ${(props) => props.theme.shadows.light};

      &::before {
        transform: scaleY(1);
      }

      ${IconWrapper} {
        transform: scale(1.1);
      }
    }

    &.active {
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.blue200} 0%,
        ${(props) => props.theme.colors.blue100} 100%
      );
      color: ${(props) => props.theme.colors.blue900};
      font-weight: 600;
      box-shadow: ${(props) => props.theme.shadows.light};
      transform: translateX(4px);

      &::before {
        transform: scaleY(1);
        width: 4px;
        background: ${(props) => props.theme.colors.blue600};
      }

      /* Indicador adicional para el estado activo */
      &::after {
        content: "";
        position: absolute;
        right: ${(props) => props.theme.spacing.md};
        width: 6px;
        height: 6px;
        background: ${(props) => props.theme.colors.blue600};
        border-radius: 50%;
        box-shadow: 0 0 8px ${(props) => props.theme.colors.blue400};
      }

      ${IconWrapper} {
        transform: scale(1.1);
      }
    }

    /* Efecto de ripple al hacer clic */
    &:active {
      transform: translateX(4px) scale(0.98);
    }
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
`;

export const FooterLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
`;

