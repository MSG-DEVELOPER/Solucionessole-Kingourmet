import styled from "styled-components";

export const RestaurantPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
 // border: 1px solid red;
`;

export const LeftSection = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.borders.default || "#ddd"};
`;
