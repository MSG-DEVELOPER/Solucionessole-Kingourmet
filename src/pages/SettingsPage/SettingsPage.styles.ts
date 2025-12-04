import styled from "styled-components";

export const SettingsPageContainer = styled.div`
  width: 90%;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 95%;
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;
