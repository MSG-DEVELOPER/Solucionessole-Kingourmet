// DataModal.styles.ts
import styled, { keyframes } from "styled-components";

// Animación fade in mejorada con escala y blur
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-30px) scale(0.95); 
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
  background-color: rgba(0, 0, 0, 0.7);
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
  background: linear-gradient(145deg, ${(props) => props.theme.colors.surface} 0%, #1a1a1a 100%);
  color: ${(props) => props.theme.colors.gray100};
  font-family: ${(props) => props.theme.fonts.main};
  border-radius: 20px;
  width: 90%;
  max-width: 900px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  animation: ${fadeIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  overflow: hidden;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

// Header moderno con separador sutil
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  
  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.gray100} 0%, ${(props) => props.theme.colors.gray300} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: ${(props) => props.theme.colors.gray300};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
    color: ${(props) => props.theme.colors.red100};
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Body con scroll personalizado
export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
  
  /* Scrollbar personalizado moderno */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
`;

// Footer elegante y sutil
export const ModalFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: right;
  color: ${(props) => props.theme.colors.gray400};
  font-size: 0.875rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  font-weight: 500;
`;

// Contenedor de tabla con scroll
export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 50vh;
  border-radius: 12px;
  
  /* Scrollbar personalizado para la tabla */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }
`;

// Tabla moderna con estilo glassmorphism
export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 1rem 1.25rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.gray300};
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
  position: sticky;
  top: 0;
  z-index: 5;
  
  &:first-child {
    border-top-left-radius: 12px;
  }
  
  &:last-child {
    border-top-right-radius: 12px;
  }
  
  &:hover {
    color: ${(props) => props.theme.colors.blue500};
    background: rgba(79, 70, 229, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${(props) => props.theme.colors.blue500}, transparent);
    }
  }
`;

export const TableRow = styled.tr`
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.02);
  }
  
  &:hover {
    background-color: rgba(79, 70, 229, 0.08);
    transform: scale(1.01);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.15);
  }
  
  &:last-child td:first-child {
    border-bottom-left-radius: 12px;
  }
  
  &:last-child td:last-child {
    border-bottom-right-radius: 12px;
  }
`;

export const TableCell = styled.td`
  padding: 1rem 1.25rem;
  color: ${(props) => props.theme.colors.gray200};
  font-size: 0.9375rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

// Mini menú de acciones moderno - posicionado a la derecha
export const ActionsMenu = styled.div`
  position: absolute;
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(145deg, ${(props) => props.theme.colors.surface} 0%, #1a1a1a 100%);
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 10;
  min-width: 160px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.2s ease forwards;
  
  /* Flecha apuntando al botón */
  &::before {
    content: '';
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-right-color: ${(props) => props.theme.colors.surface};
    filter: drop-shadow(-2px 0 2px rgba(0, 0, 0, 0.3));
  }

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme.colors.gray200};
    cursor: pointer;
    text-align: left;
    padding: 0.625rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    transition: all 0.2s ease;
    font-weight: 500;
    
    &:hover {
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(79, 70, 229, 0.05) 100%);
      color: ${(props) => props.theme.colors.blue500};
      transform: translateX(4px);
    }
    
    &:active {
      transform: translateX(2px) scale(0.98);
    }
  }
`;

// Barra de búsqueda moderna con estilo glassmorphism
export const SearchBar = styled.input`
  flex: 1;
  padding: 0.875rem 1.25rem 0.875rem 3rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.gray100};
  font-size: 0.9375rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::placeholder {
    color: ${(props) => props.theme.colors.gray500};
  }
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.blue500};
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 
      0 0 0 4px rgba(79, 70, 229, 0.1),
      0 4px 12px rgba(79, 70, 229, 0.2);
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
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.gray300};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(79, 70, 229, 0.15);
    border-color: ${(props) => props.theme.colors.blue500};
    color: ${(props) => props.theme.colors.blue500};
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

// Contenedor de búsqueda y filtro
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.75rem;
`;

// Wrapper para la barra de búsqueda con icono
export const SearchBarWrapper = styled.div`
  position: relative;
  flex: 1;
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.gray500};
    pointer-events: none;
    transition: color 0.2s ease;
  }
  
  input:focus + svg {
    color: ${(props) => props.theme.colors.blue500};
  }
`;

// Icono de acciones mejorado
export const ActionsIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${(props) => props.theme.colors.gray400};
  
  svg {
    pointer-events: none;
  }
  
  &:hover {
    background: rgba(79, 70, 229, 0.1);
    color: ${(props) => props.theme.colors.blue500};
    transform: scale(1.1);
  }
`;
