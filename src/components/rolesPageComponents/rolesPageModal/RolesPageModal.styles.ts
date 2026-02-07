import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 900px;
  padding: ${({ theme }) => theme.spacing.lg};
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: titulo, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blue600};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const RolesSubtitle = styled.p`
  text-align: center;
  font-family: cuerpo, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const TableCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: cuerpo, sans-serif;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  transition: ${({ theme }) => theme.transitions.fast};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gray700};
  vertical-align: middle;
`;

export const CellNombre = styled(TableCell)`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black200};
`;

export const RowActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: transparent;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.gray200};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue500};
    outline-offset: 2px;
  }

  &.icon-pencil {
    color: ${({ theme }) => theme.colors.blue600};
  }

  &.icon-pencil:hover {
    background: ${({ theme }) => theme.colors.blue100};
  }

  &.icon-trash {
    color: ${({ theme }) => theme.colors.red500};
  }

  &.icon-trash:hover {
    background: ${({ theme }) => theme.colors.red100};
  }

  &.icon-ban {
    color: ${({ theme }) => theme.colors.gray500};
    cursor: default;
  }

  &.icon-ban:hover {
    background: transparent;
  }
`;

export const IconCell = styled.td`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  vertical-align: middle;
  width: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.gray700};
  background: ${({ theme }) => theme.colors.gray100};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray300};
  font-family: cuerpo, sans-serif;
`;

export const ThRight = styled.th`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  text-align: right;
  background: ${({ theme }) => theme.colors.gray100};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray300};
  width: 100px;
`;

export const AddRoleButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1.5px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.green100};
    border-color: ${({ theme }) => theme.colors.green500};
    color: ${({ theme }) => theme.colors.green600};
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Chip = styled.span<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 600;
  font-family: cuerpo, sans-serif;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.green100 : theme.colors.gray200};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.green700 : theme.colors.gray600};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.green500 : theme.colors.gray300};
`;
