import styled from "styled-components";

export const RestaurantPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    height: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50%;
  }
`;

export const RightSection = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.borders.default || "#ddd"};

  @media (max-width: 1024px) {
    width: 100%;
    height: 40%;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.borders.default || "#ddd"};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.borders.default || "#ddd"};
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 50%;
    border-left: none;
    border-top: 1px solid ${({ theme }) => theme.borders.default || "#ddd"};
  }
`;
