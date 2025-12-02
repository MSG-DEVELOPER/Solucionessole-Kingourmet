import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  padding: ${({ theme }) => theme.spacing.lg};
`;
