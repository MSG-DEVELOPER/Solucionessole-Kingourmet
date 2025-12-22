import styled from "styled-components";

export const AccountPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountCard = styled.div`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: -${({ theme }) => theme.spacing.md} -${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
`;

export const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme }) => theme.colors.gray100};
  flex-shrink: 0;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FullName = styled.h2`
  font-family: cuerpo;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black200};
  margin: 0;
`;

export const UserRole = styled.span`
  font-family: cuerpo;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray600};
  text-transform: capitalize;
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: cuerpo;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black200};
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const DatesTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const DateRow = styled.div<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  font-family: cuerpo;
  font-size: ${({ $highlight }) => ($highlight ? "0.95rem" : "0.85rem")};
  font-weight: ${({ $highlight }) => ($highlight ? "600" : "400")};
  color: ${({ theme, $highlight }) => 
    $highlight ? theme.colors.black200 : theme.colors.gray500};
`;

export const DateLabel = styled.span`
  min-width: 130px;
  font-weight: 500;
`;

export const DateValue = styled.span`
  flex: 1;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const InfoLabel = styled.label`
  font-family: cuerpo;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const InfoValue = styled.div`
  font-family: cuerpo;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black200};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-height: 2.5rem;
  display: flex;
  align-items: center;
`;

export const EmptyValue = styled.span`
  color: ${({ theme }) => theme.colors.gray400};
  font-style: italic;
`;

export const NotesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const NotesTextarea = styled.textarea`
  font-family: cuerpo;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black200};
  padding: ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 60px;
  resize: none;
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue500};
    background: ${({ theme }) => theme.colors.surface};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const ActionsSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.spacing.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.gray200};
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.red500};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: cuerpo;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    background: ${({ theme }) => theme.colors.red700};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.blue300};
    outline-offset: 2px;
  }
`;

