import styled from "styled-components";

export const RestaurantPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const LeftSection = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.borders.default || "#ddd"};
`;
