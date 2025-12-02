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

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.colors.gray700};
  margin: 0 0 ${theme.spacing.md} 0;
  padding: ${theme.spacing.sm} 0;
  letter-spacing: -0.02em;
  text-align: center;
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
`;

export const NamePhoneRow = styled.div`
  display: flex;
  align-items: center;
 // justify-content: space-around;
  margin-bottom: ${theme.spacing.sm};
  gap: ${theme.spacing.sm};
`;

export const ReservationPhone = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.gray600};
  font-size: 0.85rem;
  margin: 0;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.gray100};
  border-radius: ${theme.borderRadius.md};
  flex-shrink: 0;
  border: 1px solid ${theme.colors.gray200};

  svg {
    color: ${theme.colors.gray500};
    flex-shrink: 0;
  }
`;

export const ReservationTable = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: 0.9rem;
  color: ${theme.colors.gray600};
  font-weight: 500;
`;

export const TableChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  background: ${theme.colors.gray700};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: ${theme.shadows.light};
  min-width: 40px;
  transition: ${theme.transitions.fast};

  ${ReservationCard}:hover & {
    background: ${theme.colors.gray600};
    box-shadow: ${theme.shadows.medium};
  }
`;

export const ReservationTime = styled.span`
  font-style: italic;
  color: ${theme.colors.gray600};
  font-size: 0.9rem;
  margin-left: ${theme.spacing.xs};
`;
