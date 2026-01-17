import styled, { keyframes } from "styled-components";

// Animaciones
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

// Overlay
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
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

// Contenedor del modal
export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.heavy};
  padding: ${({ theme }) => theme.spacing.xl};
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 768px) {
    max-width: calc(100% - ${({ theme }) => theme.spacing.lg} * 2);
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  @media (max-width: 480px) {
    max-width: calc(100% - ${({ theme }) => theme.spacing.md} * 2);
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

// Botón de cerrar
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

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    top: ${({ theme }) => theme.spacing.sm};
    right: ${({ theme }) => theme.spacing.sm};
    font-size: 1rem;
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

// Header
export const ModalHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-right: ${({ theme }) => theme.spacing.xl};
  text-align: center;

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
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black100};
  margin: 0;
  font-family: titulo;

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

// Contenido
export const ModalContent = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ModalMessage = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray700};
  line-height: 1.6;
  margin: 0;
  font-family: cuerpo;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

// Botón de acción
export const ActionButton = styled.button`
  width: 100%;
  padding: 0.85rem ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.blue600};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.light};
  font-family: cuerpo;

  @media (max-width: 768px) {
    padding: 0.75rem ${({ theme }) => theme.spacing.md};
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem ${({ theme }) => theme.spacing.md};
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

// Icono de advertencia
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.orange500};

  svg {
    width: 48px;
    height: 48px;
  }

  @media (max-width: 480px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
