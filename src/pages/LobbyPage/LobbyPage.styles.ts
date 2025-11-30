import styled from "styled-components";

export const LobbyContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.main`
  flex: 1;
  padding: ${(props) => props.theme.spacing.xl};
  margin-left: 240px; /* mismo ancho que el sidebar */
  overflow-y: auto;
`;
