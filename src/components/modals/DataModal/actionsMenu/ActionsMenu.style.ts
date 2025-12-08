import styled from "styled-components";

// Mini menú de acciones moderno - posicionado a la derecha
export const MenuContainer = styled.div`
  position: absolute;
  left: calc(100% + 8px);
  top: -80%; /* tu valor actual */
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.heavy};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: 15;
  min-width: 100px; /* tu valor actual */
  border: 1px solid ${({ theme }) => theme.colors.gray200};

  /* Flecha apuntando al botón */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: ${({ theme }) => theme.colors.surface};
    filter: drop-shadow(-2px 0 2px rgba(0, 0, 0, 0.1));
  }

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.black200};
    cursor: pointer;
    text-align: left;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: 0.82rem; /* tu valor actual */
    transition: ${({ theme }) => theme.transitions.fast};
    font-weight: 500;
    font-family: cuerpo;

    &:hover {
      background: ${({ theme }) => theme.colors.blue100};
      color: ${({ theme }) => theme.colors.blue600};
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
