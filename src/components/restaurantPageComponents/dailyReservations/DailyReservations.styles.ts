import styled from 'styled-components';
import { theme } from '../../../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${theme.colors.background};
  box-sizing: border-box;
  min-height: 0;
`;

export const ReservationCard = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
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
  margin: 0 0 ${theme.spacing.md} 0;
  letter-spacing: -0.01em;
`;

export const ReservationPhone = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.gray600};
  font-size: 0.9rem;
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${theme.colors.gray100};
  border-radius: ${theme.borderRadius.md};
  width: fit-content;
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
  padding: ${theme.spacing.xs} ${theme.spacing.md};
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
