import styled from "styled-components";

export const SettingsItemCard = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.borders.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};

  cursor: pointer;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  transition: ${({ theme }) => theme.transitions.fast};

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.xs};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.xs};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.blue600};
`;

export const ItemTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black200};
  margin: 0;
  font-family: titulo;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ItemDesc = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.gray500};
  margin: 0;
  font-family: cuerpo;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
