import styled from "styled-components";

export const AccountPageContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    160deg,
    ${({ theme }) => theme.colors.gray100} 0%,
    ${({ theme }) => theme.colors.background} 40%,
    ${({ theme }) => theme.colors.blue100} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const AccountCard = styled.div`
  width: 100%;
  max-width: 640px;
  max-height: calc(100vh - ${({ theme }) => theme.spacing.xl} * 2);
  @media (min-width: 768px) {
    max-height: calc(100vh - ${({ theme }) => theme.spacing.xxl} * 2);
  }
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ProfileHeader = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue600} 0%,
    ${({ theme }) => theme.colors.blue800} 100%
  );
`;

export const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.surface};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.gray100};
  @media (min-width: 480px) {
    width: 96px;
    height: 96px;
  }
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  min-width: 0;
`;

export const FullName = styled.h1`
  font-family: titulo, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.surface};
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
  @media (min-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const UserRole = styled.span`
  display: inline-block;
  font-family: cuerpo, sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 2px ${({ theme }) => theme.spacing.sm};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: ${({ theme }) => theme.shadows.light};
`;

export const SectionTitle = styled.h2`
  font-family: cuerpo, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray500};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

export const ContactGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-family: cuerpo, sans-serif;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.black200};
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.blue100};
  color: ${({ theme }) => theme.colors.blue600};
  flex-shrink: 0;
`;

export const DatesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const DateRow = styled.div<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-family: cuerpo, sans-serif;
  font-size: 0.9rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  &:last-child {
    border-bottom: none;
  }
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.black200 : theme.colors.gray600};
  font-weight: ${({ $highlight }) => ($highlight ? "600" : "400")};
`;

export const DateLabel = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
`;

export const DateValue = styled.span`
  text-align: right;
`;

export const InfoLabel = styled.label`
  font-family: cuerpo, sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray500};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const InfoValue = styled.div`
  font-family: cuerpo, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black200};
  padding: ${({ theme }) => theme.spacing.md};
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
`;

export const NotesTextarea = styled.textarea`
  font-family: cuerpo, sans-serif;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black200};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-height: 80px;
  resize: vertical;
  outline: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue400};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.blue100};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

export const ActionsSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: stretch;
  @media (min-width: 480px) {
    justify-content: flex-end;
  }
`;

export const EditButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.blue600};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: cuerpo, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
  width: 100%;
  @media (min-width: 480px) {
    width: auto;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue700};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue400};
    outline-offset: 2px;
  }
`;
