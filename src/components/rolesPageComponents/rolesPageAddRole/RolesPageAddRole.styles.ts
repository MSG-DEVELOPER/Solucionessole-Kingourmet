import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 1100;
  backdrop-filter: blur(6px);
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  width: 90%;
  max-width: 480px;
  box-shadow: ${({ theme }) => theme.shadows.heavy};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray100};

  h3 {
    margin: 0;
    font-family: titulo, sans-serif;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 1.25rem;
  line-height: 1;
  min-width: 32px;
  min-height: 32px;

  &:hover {
    background: ${({ theme }) => theme.colors.red100};
    border-color: ${({ theme }) => theme.colors.red500};
    color: ${({ theme }) => theme.colors.red700};
  }
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray600};
  font-family: cuerpo, sans-serif;
`;

export const Input = styled.input`
  padding: 0.75rem ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-family: cuerpo, sans-serif;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }
`;

export const Footer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray100};
`;

export const PrimaryButton = styled.button`
  padding: 0.75rem 1.1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background: ${({ theme }) => theme.colors.blue600};
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-family: cuerpo, sans-serif;

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
  }
`;

export const SecondaryButton = styled.button`
  padding: 0.75rem 1.1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
  font-family: cuerpo, sans-serif;

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }
`;
