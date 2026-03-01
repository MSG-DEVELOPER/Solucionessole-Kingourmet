import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 8, 20, 0.6);
  z-index: 1100;
  backdrop-filter: blur(8px);
  padding: ${({ theme }) => theme.spacing.md};
  overflow-x: hidden;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.black200};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  width: 100%;
  max-width: 720px;
  max-height: 90vh;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gray100} 0%,
    ${({ theme }) => theme.colors.surface} 100%
  );

  h3 {
    margin: 0;
    font-family: titulo, sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black200};
    letter-spacing: -0.02em;
  }
`;

export const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 1.25rem;
  line-height: 1;
  min-width: 36px;
  min-height: 36px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.red100};
    border-color: ${({ theme }) => theme.colors.red500};
    color: ${({ theme }) => theme.colors.red700};
  }
`;

export const Body = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 0;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  font-family: cuerpo, sans-serif;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray200};

  th,
  td {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }

  th {
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.gray600};
    background: ${({ theme }) => theme.colors.gray100};
  }

  tbody tr {
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      background: ${({ theme }) => theme.colors.gray100};
    }

    &:last-child td {
      border-bottom: none;
    }
  }

  td {
    color: ${({ theme }) => theme.colors.black200};
  }

  td:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray700};
  }
`;

export const Message = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.gray600};
  font-family: cuerpo, sans-serif;
  text-align: center;
  font-size: 0.95rem;
`;

export const ToggleCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;
`;

export const PermissionIcon = styled.span<{ $allowed: boolean }>`
  display: inline-flex;
  align-items: center;
  color: ${({ $allowed, theme }) => ($allowed ? theme.colors.green600 : theme.colors.red600)};
`;

export const ToggleSwitch = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.gray500};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    background: ${({ theme }) => theme.colors.blue100};
    border-color: ${({ theme }) => theme.colors.blue400};
    color: ${({ theme }) => theme.colors.blue600};
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.blue100};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Footer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray100};
  display: flex;
  justify-content: flex-end;
`;

export const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  background: ${({ theme }) => theme.colors.blue600};
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: cuerpo, sans-serif;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
