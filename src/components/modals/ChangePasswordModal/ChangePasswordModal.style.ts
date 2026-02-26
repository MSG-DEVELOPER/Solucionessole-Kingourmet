import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 20, 0.75);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.4);
  padding: ${({ theme }) => theme.spacing.xl};
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 768px) {
    max-width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
    max-height: 90vh;
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};
  font-size: 1.2rem;
  line-height: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.black100};
    transform: rotate(90deg);
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.xl};
`;

export const ModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black100};
  margin: 0;
  font-family: titulo;

  @media (max-width: 480px) {
    font-size: 1.35rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray700};
  font-family: cuerpo;
`;

export const Input = styled.input`
  padding: 0.75rem ${({ theme }) => theme.spacing.md};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black100};
  background: ${({ theme }) => theme.colors.surface};
  transition: ${({ theme }) => theme.transitions.fast};
  font-family: cuerpo;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const ErrorText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.red500};
  font-family: cuerpo;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 0.85rem ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray700};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  font-family: cuerpo;

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  padding: 0.85rem ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.blue600};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.light};
  font-family: cuerpo;

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }
`;
