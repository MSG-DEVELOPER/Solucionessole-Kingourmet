import styled from "styled-components";

export const SettingsPageContainer = styled.div`
  width: 90%;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 95%;
    padding: ${({ theme }) => theme.spacing.md} 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.xs} 0;
  }
`;
