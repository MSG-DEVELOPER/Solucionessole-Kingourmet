import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: none;
  position: sticky;
  top: 0;
  z-index: 1000; /* Por encima del modal para que siempre quede visible */
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.surface} 0%,
    ${(props) => props.theme.colors.gray100} 100%
  );
  border-bottom: 1px solid ${(props) => props.theme.colors.gray200};
  box-shadow: ${(props) => props.theme.shadows.medium};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${(props) => props.theme.spacing.md};
`;

export const Title = styled.h2`
  font-size: 1.3rem;
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
  flex: 1;
`;

export const BurgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: ${(props) => props.theme.spacing.sm};
  background: ${(props) => props.theme.colors.surface};
  border: 1.5px solid ${(props) => props.theme.colors.gray200};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.fast};
  color: ${(props) => props.theme.colors.gray700};
  box-shadow: ${(props) => props.theme.shadows.light};
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2;
    transition: ${(props) => props.theme.transitions.fast};
  }

  &:hover {
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.blue100} 0%,
      ${(props) => props.theme.colors.blue200} 100%
    );
    border-color: ${(props) => props.theme.colors.blue400};
    color: ${(props) => props.theme.colors.blue700};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.medium};

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: ${(props) => props.theme.shadows.light};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.blue100};
  }
`;