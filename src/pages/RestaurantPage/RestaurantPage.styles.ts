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

export const DesktopContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 0;

  @media (max-width: 768px) {
    display: none;
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

export const MobileContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileSwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.gray600};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    background: ${({ theme }) => theme.colors.blue100};
    color: ${({ theme }) => theme.colors.blue600};
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const MobileContent = styled.div`
  flex: 1;
  min-height: 0;
  overflow: auto;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: ${({ theme }) => theme.spacing.sm};
`;
