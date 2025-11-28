import styled, { css, keyframes } from "styled-components";

// ----------------- animaciones -----------------
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const hoverLift = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

const gradientAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ----------------- HERO -----------------
export const HeroSection = styled.div`
  min-height: 75vh;
  background: ${({ theme }) => theme.colors.blue100};
  background-size: 400% 400%;
  animation: ${gradientAnim} 15s ease infinite;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl} 1rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .text-block {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    animation: ${fadeInUp} 0.8s ease-out forwards;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.black100};
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const Subtitle = styled.span`
  display: block;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: -0.5rem;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 1rem auto 1.5rem;
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 1.5;
`;

// ----------------- BUTTONS -----------------
export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

interface StyledButtonProps {
  variant?: "primary" | "outline";
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.7rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: 1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  font-weight: 700;
  border: 2px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.light};

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${props.theme.colors.blue600};
      color: white;

      &:hover {
        animation: ${hoverLift} 0.4s;
        background: ${props.theme.colors.blue700};
        transform: scale(1.03);
        box-shadow: ${props.theme.shadows.medium};
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background: white;
      border-color: ${props.theme.colors.blue600};
      color: ${props.theme.colors.blue600};

      &:hover {
        background: ${props.theme.colors.blue100};
      }
    `}
`;

// ----------------- FEATURES -----------------
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} 0;
  max-width: 900px;     /* <-- añade esto */
  margin: 0 auto;       /* <-- centra la grid */
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  h3 {
    margin: 0.6rem 0;
    color: ${({ theme }) => theme.colors.black100};
    font-size: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 1.4;
    font-size: 1rem;
  }
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blue600};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  box-shadow: ${({ theme }) => theme.shadows.light};
`;

// ----------------- CTA -----------------
export const CTASection = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const CTAInner = styled.div`
  background: ${({ theme }) => theme.colors.blue600};
  color: white;
  padding: 2.5rem 2rem;
  max-width: 680px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.medium};

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.15rem;
    color: #f8fafc;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    opacity: 0.95;
  }
`;

export const CTAButton = styled.button`
  padding: 0.9rem 2rem;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.blue600};
  font-size: 1.1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  border: none;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.blue100};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;
