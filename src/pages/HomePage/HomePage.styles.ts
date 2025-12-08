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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

// ----------------- BRAND BAR -----------------
export const FixedBrandBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem 0.8rem;
  background: rgba(6, 10, 20, 0.72);
  backdrop-filter: blur(8px);
  z-index: 20;
  text-align: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
`;

export const BrandName = styled.div`
  font-family: "CinzelDecorative-Bold", serif;
  font-size: clamp(1.05rem, 2.4vw, 1.65rem);
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.surface};
  line-height: 1.1;
`;

export const BrandLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 56px;
    height: 56px;
  }
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
  padding-top: calc(${({ theme }) => theme.spacing.xl} + 7rem);
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(5, 8, 20, 0.32);
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    padding-top: calc(${({ theme }) => theme.spacing.lg} + 6rem);
    min-height: 90vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: calc(${({ theme }) => theme.spacing.md} + 5.5rem);
    min-height: 85vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: ${({ theme }) => theme.spacing.sm};
    padding-top: calc(${({ theme }) => theme.spacing.sm} + 5rem);
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    margin: 0 auto;
    margin-top: 0;
    padding: ${({ theme }) => theme.spacing.xl};
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;



export const Title = styled.h1`
  font-size: clamp(1.8rem, 4.5vw, 3.2rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.blue100};
  margin-bottom: 0.5rem;
  margin-top: -1rem;
  font-family: titulo;


  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.6rem, 5.5vw, 2.2rem);
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    font-size: clamp(1.4rem, 6.5vw, 1.85rem);
  }
`;

export const Subtitle = styled.span`
  display: block;
  font-size: clamp(1.05rem, 2.8vw, 1.75rem);
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1.25rem;
  font-weight: 600;
  font-family: titulo;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(0.95rem, 3.6vw, 1.35rem);
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 540px;
  margin: 1rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.blue100};
  line-height: 1.6;
  font-family: cuerpo;
`;

// ----------------- BUTTONS -----------------
export const ButtonsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.spacing.sm};
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
  font-family: cuerpo;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: 0.9rem;
  }

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

      @media (max-width: ${props.theme.breakpoints.mobile}) {
        &:hover {
          transform: scale(1.01);
        }
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
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.gray100} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.blue300},
      transparent
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

export const SectionHeading = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const SectionEyebrow = styled.span`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.blue600};
  font-weight: 700;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue100},
    ${({ theme }) => theme.colors.blue200}
  );
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.light};
  font-family: titulo;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    letter-spacing: 0.15em;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black200},
    ${({ theme }) => theme.colors.gray700}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: ${({ theme }) => theme.spacing.md} 0;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-family: titulo;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.5rem, 6vw, 2.2rem);
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }
`;

export const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 1.8;
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  max-width: 700px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  font-family: cuerpo;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(0.9rem, 3vw, 1rem);
    line-height: 1.6;
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
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
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.medium};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    font-size: 1.1rem;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: 2px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.blue400},
      ${({ theme }) => theme.colors.blue600}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: ${({ theme }) => theme.transitions.medium};
  }
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: ${({ theme }) => theme.shadows.light};
  transition: ${({ theme }) => theme.transitions.medium};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  position: relative;
  overflow: hidden;
  animation: ${scaleIn} 0.6s ease-out backwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.blue600},
      ${({ theme }) => theme.colors.blue400},
      ${({ theme }) => theme.colors.blue600}
    );
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: ${({ theme }) => theme.transitions.medium};
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.heavy};
    border-color: ${({ theme }) => theme.colors.blue300};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: translateY(-6px) scale(1.01);
    }

    &::before {
      transform: scaleX(1);
      animation: ${shimmer} 2s linear infinite;
    }

    ${IconWrapper} {
      transform: scale(1.15) rotate(5deg);
      animation: ${float} 3s ease-in-out infinite;

      &::after {
        opacity: 1;
      }
    }
  }

  h3 {
    margin: ${({ theme }) => theme.spacing.md} 0 ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.black200};
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    font-family: titulo;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.25rem;
      margin: ${({ theme }) => theme.spacing.sm} 0;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.gray600};
    line-height: 1.7;
    font-size: 1.05rem;
    margin: 0;
    font-family: cuerpo;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

// ----------------- CTA -----------------
export const CTASection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gray100} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.blue300},
      transparent
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

export const CTAInner = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.blue600} 0%,
    ${({ theme }) => theme.colors.blue800} 50%,
    ${({ theme }) => theme.colors.blue700} 100%
  );
  background-size: 200% 200%;
  color: white;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
  max-width: 900px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.heavy};
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out, ${gradientShift} 8s ease infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 70%
    );
    animation: ${float} 6s ease-in-out infinite;
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.8rem);
    font-weight: 800;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    position: relative;
    z-index: 1;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    font-family: titulo;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }

  p {
    font-size: clamp(0.95rem, 2vw, 1.2rem);
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    font-family: cuerpo;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: clamp(0.9rem, 3vw, 1rem);
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      padding: 0 ${({ theme }) => theme.spacing.sm};
    }
  }
`;

export const CTAButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.blue700};
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  border: none;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: ${({ theme }) => theme.transitions.medium};
  position: relative;
  z-index: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  overflow: hidden;
  font-family: cuerpo;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};
    font-size: 0.95rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: ${({ theme }) => theme.transitions.medium};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blue100};
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      transform: translateY(-2px) scale(1.02);
    }

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;
