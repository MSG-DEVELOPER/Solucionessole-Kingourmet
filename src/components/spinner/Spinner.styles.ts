import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
`;

export const SpinnerRing = styled.div`
  position: absolute;
  inset: 0;
  border: 4px solid ${({ theme }) => theme.colors.gray200};
  border-top-color: ${({ theme }) => theme.colors.blue500};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
`;

export const SpinnerLogo = styled.img`
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15));
`;

