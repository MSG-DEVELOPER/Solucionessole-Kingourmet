import styled, { keyframes } from "styled-components";

// ----------------- animaciones -----------------
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

// ----------------- OVERLAY -----------------
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

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    align-items: center;
  }
`;

// ----------------- MODAL -----------------
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

  @media (max-width: 1024px) {
    max-width: calc(100% - ${({ theme }) => theme.spacing.lg} * 2);
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    max-width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.lg};
    margin: 0;
    max-height: 90vh;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    max-width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: ${({ theme }) => theme.spacing.md};
    margin: 0;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

// ----------------- CLOSE BUTTON -----------------
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

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: ${({ theme }) => theme.spacing.sm};
    right: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    top: ${({ theme }) => theme.spacing.xs};
    right: ${({ theme }) => theme.spacing.xs};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.black100};
    transform: rotate(90deg);
  }

  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;

// ----------------- HEADER -----------------
export const ModalHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding-right: ${({ theme }) => theme.spacing.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding-right: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black100};
  margin: 0;
  font-family: titulo;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
  }
`;

// ----------------- FORM -----------------
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
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
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: cuerpo;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.7rem ${({ theme }) => theme.spacing.sm};
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.65rem ${({ theme }) => theme.spacing.sm};
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const SubmitButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing.sm};
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
  width: 100%;
  font-family: cuerpo;

  @media (max-width: 768px) {
    padding: 0.8rem ${({ theme }) => theme.spacing.md};
    font-size: 0.95rem;
    margin-top: ${({ theme }) => theme.spacing.xs};
  }

  @media (max-width: 480px) {
    padding: 0.75rem ${({ theme }) => theme.spacing.md};
    font-size: 0.9rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }
`;

