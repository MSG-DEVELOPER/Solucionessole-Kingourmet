import styled from 'styled-components';
import { theme } from '../../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.sm};
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${theme.colors.background};
  box-sizing: border-box;
  min-height: 0;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: ${theme.spacing.sm};
  }

  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing.xs};
    gap: ${theme.spacing.sm};
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme.colors.gray400};
  margin: 0;
  padding: ${theme.spacing.sm} 0;
  letter-spacing: -0.02em;
  text-align: center;
  font-family: titulo;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 250px;
  
  svg {
    position: absolute;
    left: ${theme.spacing.md};
    top: 50%;
    transform: translateY(-50%);
    color: ${theme.colors.gray500};
    pointer-events: none;
    transition: ${theme.transitions.fast};
  }
  
  input:focus + svg {
    color: ${theme.colors.blue500};
  }

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }
`;

export const SearchBar = styled.input`
  flex: 1;
  padding: 0.65rem ${theme.spacing.lg} 0.65rem 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  border: 1.5px solid ${theme.colors.gray300};
  background: ${theme.colors.surface};
  color: ${theme.colors.black200};
  font-size: 0.875rem;
  transition: ${theme.transitions.fast};
  font-family: cuerpo;
  width: 100%;
  
  &::placeholder {
    color: ${theme.colors.gray400};
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.blue500};
    box-shadow: 0 0 0 3px ${theme.colors.blue100};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem ${theme.spacing.md} 0.6rem 2.25rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.55rem ${theme.spacing.sm} 0.55rem 2rem;
    font-size: 0.75rem;
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  color: black;
  border: none;
  cursor: pointer;
  transition: ${theme.transitions.fast};
  box-shadow: ${theme.shadows.light};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }

  svg {
    stroke-width: 2.5;
  }

  &:hover {
    background: ${theme.colors.blue400};
    color: white;
    transform: scale(1.1);
    box-shadow: ${theme.shadows.medium};
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.blue100};
  }
`;

export const ReservationCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.sm};
  box-shadow: ${theme.shadows.light};
  border: 1px solid ${theme.colors.gray200};
  transition: ${theme.transitions.fast};
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  border-left: 3px solid ${theme.colors.gray400};

  &:hover {
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-2px);
    border-color: ${theme.colors.gray300};
    border-left-color: ${theme.colors.teal500};
  }
`;

export const ReservationName = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${theme.colors.gray700};
  margin: 0;
  letter-spacing: -0.01em;
  font-family: titulo;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.sm};
  gap: ${theme.spacing.sm};
`;

export const ReservationStatus = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StatusChip = styled.span<{ $estado: "confirmada" | "Pendiente" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  font-size: 0.8rem;
  font-family: cuerpo;
  text-transform: capitalize;
  transition: ${theme.transitions.fast};
  
  background: ${props => 
    props.$estado === "confirmada" 
      ? theme.colors.blue100 
      : theme.colors.gray500};
  color: ${props => 
    props.$estado === "confirmada" 
      ? theme.colors.black200 
      : theme.colors.surface};
  border: 1px solid ${props => 
    props.$estado === "confirmada" 
      ? theme.colors.blue300 
      : theme.colors.gray600};

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: ${theme.spacing.xs};
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const ReservationInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

export const ReservationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.gray600};
  font-size: 0.9rem;
  font-weight: 500;
  font-family: cuerpo;

  svg {
    color: ${theme.colors.gray500};
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  flex: 1;
`;

export const StatusMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  color: ${theme.colors.gray600};
  font-family: cuerpo;
  font-weight: 500;
  text-align: center;
`;
