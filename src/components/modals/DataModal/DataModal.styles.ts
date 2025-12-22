// DataModal.styles.ts
import styled, { keyframes } from "styled-components";

// Animación fade in mejorada con escala
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-20px) scale(0.96); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`;

// Overlay con backdrop blur moderno
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease forwards;
`;

// Contenedor del modal con sombra moderna y bordes más redondeados
export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-family: cuerpo;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  width: 95%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.heavy};
  border: 1px solid ${({ theme }) => theme.colors.gray200};

  @media (max-width: 1024px) {
    width: 95%;
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-width: 100%;
    max-height: 90vh;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  @media (max-width: 480px) {
    width: 100%;
    max-height: 95vh;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

// Header moderno con separador sutil
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  }
  
  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.black200};
    font-family: titulo;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-left: auto;
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
  padding: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.red100};
    border-color: ${({ theme }) => theme.colors.red500};
    color: ${({ theme }) => theme.colors.red600};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Body sin scroll (el scroll está solo en la tabla)
export const ModalBody = styled.div`
  flex: 1;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

// Footer elegante y sutil
export const ModalFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
  text-align: right;
  color: ${({ theme }) => theme.colors.gray500};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.gray100};
  font-weight: 500;
  font-family: cuerpo;
`;

// Contenedor de tabla con scroll
export const TableWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow-x: auto;
  overflow-y: auto;
  min-height: 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  
  /* Scrollbar personalizado para la tabla */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray100};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    
    &:hover {
      background: ${({ theme }) => theme.colors.gray400};
    }
  }
`;

// Tabla moderna con estilo limpio
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray300};
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.gray600};
  background: ${({ theme }) => theme.colors.gray100};
  transition: ${({ theme }) => theme.transitions.fast};
  position: sticky;
  top: 0;
  z-index: 5;
  font-family: titulo;
  
  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.blue600};
    background: ${({ theme }) => theme.colors.blue100};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.blue500};
    }
  }
`;

export const TableRow = styled.tr`
  transition: ${({ theme }) => theme.transitions.fast};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue100};
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
  
  &:last-child td:first-child {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.lg};
  }
  
  &:last-child td:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black200};
  font-size: 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  font-family: cuerpo;
`;

// Barra de búsqueda moderna
export const SearchBar = styled.input`
  flex: 1;
  padding: 0.875rem ${({ theme }) => theme.spacing.lg} 0.875rem 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  font-size: 0.9375rem;
  transition: ${({ theme }) => theme.transitions.fast};
  font-family: cuerpo;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue500};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
    transform: translateY(-1px);
  }
`;

// Icono de filtro moderno
export const FilterIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.gray600};
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.blue100};
    border-color: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.blue600};
    transform: scale(1.05) rotate(5deg);
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Contenedor de búsqueda y filtro
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 420px;
`;

// Wrapper para la barra de búsqueda con icono
export const SearchBarWrapper = styled.div`
  position: relative;
  flex: 1;
  
  svg {
    position: absolute;
    left: ${({ theme }) => theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray500};
    pointer-events: none;
    transition: ${({ theme }) => theme.transitions.fast};
  }
  
  input:focus + svg {
    color: ${({ theme }) => theme.colors.blue500};
  }
`;

// Icono de acciones mejorado
export const ActionsIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  color: ${({ theme }) => theme.colors.gray500};
  
  svg {
    pointer-events: none;
  }
  
  &:hover {
    background: ${({ theme }) => theme.colors.blue100};
    color: ${({ theme }) => theme.colors.blue600};
    transform: scale(1.1);
  }
`;
