import styled from "styled-components";

export const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.gray300};
  }

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Question = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  text-align: left;
  background: ${({ theme }) => theme.colors.gray100};
  border: none;
  font-family: cuerpo;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black200};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.gray200};
  }

  &:active {
    background: ${({ theme }) => theme.colors.gray300};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: 0.9rem;
  }
`;

export const Answer = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.gray700};
  font-family: cuerpo;
  font-size: 0.95rem;
  line-height: 1.6;
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: 0.85rem;
  }
`;
