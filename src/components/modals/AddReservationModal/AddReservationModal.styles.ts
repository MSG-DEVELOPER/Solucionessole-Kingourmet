import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  animation: ${fadeIn} 0.2s ease;
`;

export const ModalCard = styled.div`
  width: min(600px, 92vw);
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.heavy};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  overflow: hidden;
  animation: ${fadeIn} 0.22s ease;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
`;

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gray100};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-family: titulo;
    color: ${({ theme }) => theme.colors.gray700};
    letter-spacing: -0.02em;
  }
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray600};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.red100};
    border-color: ${({ theme }) => theme.colors.red500};
    color: ${({ theme }) => theme.colors.red700};
  }
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  overflow: visible;

  .date-field,
  .time-field,
  .comensales-field {
    grid-column: span 1;
  }

  /* Campos que ocupan toda la fila (excepto los tres de arriba) */
  > *:not(.date-field):not(.time-field):not(.comensales-field) {
    grid-column: 1 / -1;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    
    .date-field,
    .time-field,
    .comensales-field {
      grid-column: span 1;
    }
    
    > *:not(.date-field):not(.time-field):not(.comensales-field) {
      grid-column: span 1;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray700};
  font-family: cuerpo;
`;

export const Input = styled.input`
  padding: 0.75rem ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-family: cuerpo;
  transition: ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }
`;

export const Select = styled.select`
  padding: 0.75rem ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-family: cuerpo;
  transition: ${({ theme }) => theme.transitions.fast};
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-family: cuerpo;
  transition: ${({ theme }) => theme.transitions.fast};
  resize: vertical;
  grid-column: 1 / -1;
  min-height: 60px;
  max-height: 80px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray100};
`;

export const SecondaryButton = styled.button`
  padding: 0.65rem ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.gray700};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }
`;

export const PrimaryButton = styled.button`
  padding: 0.65rem ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  background: ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.surface};
  font-weight: 700;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Form = styled.form`
  display: contents;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red600};
  font-size: 0.875rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const TimeSelectsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  ${Select} {
    flex: 1;
  }
`;
