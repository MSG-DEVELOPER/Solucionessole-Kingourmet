import styled from "styled-components";

export const LobbyContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: row;
  }
`;

export const Content = styled.main`
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${(props) => props.theme.spacing.sm};

  @media (max-width: 1024px) {
    padding: ${(props) => props.theme.spacing.sm};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.xs};
  }

  @media (max-width: 480px) {
    padding: ${(props) => props.theme.spacing.xs};
    width: 100%;
    flex: 1 1 100%;
  }
`;
