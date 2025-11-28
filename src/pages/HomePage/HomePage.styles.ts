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

// ----------------- HERO -----------------
export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url("/IA.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(5, 8, 20, 0.32);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export const HeroCopy = styled.div`
  max-width: 520px;
  padding: 2.5rem;
  background: rgba(11, 20, 45, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.colors.surface};
  margin-top: -${({ theme }) => theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
    margin-top: 0;
  }
`;



export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue100};
  margin-bottom: 0.5rem;
  margin-top:-1rem;
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const Subtitle = styled.span`
  display: block;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1.25rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 540px;
  margin: 1rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.blue100};
  line-height: 1.6;
`;

// ----------------- BUTTONS -----------------
export const ButtonsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
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
      background: transparent;
      border-color: rgba(255, 255, 255, 0.4);
      color: ${props.theme.colors.surface};

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `}
`;

// ----------------- FEATURES -----------------
export const CardsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
`;

export const SectionHeading = styled.div`
  max-width: 760px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const SectionEyebrow = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.blue500};
  font-weight: 600;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: ${({ theme }) => theme.colors.black100};
  margin: 0.6rem 0;
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 1.6;
  font-size: 1.05rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1100px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: calc(${({ theme }) => theme.spacing.lg} * 1.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
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
  margin: 0 0 1.2rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue600},
    ${({ theme }) => theme.colors.blue800}
  );
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
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
`;

export const CTAInner = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue600},
    ${({ theme }) => theme.colors.blue800}
  );
  color: white;
  padding: 3rem 2.5rem;
  max-width: 820px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.heavy};

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
  color: ${({ theme }) => theme.colors.blue700};
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
