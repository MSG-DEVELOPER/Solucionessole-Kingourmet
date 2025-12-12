import { useState } from "react";
import LoginForm from "../../components/modals/LoginForm/LoginForm";
import SignupForm from "../../components/modals/SignupForm/SignupForm";
import logoKG from "../../assets/icons/Kingourmet_no_bg.svg";

import {
  HeroSection,
  HeroContent,
  HeroCopy,
  Title,
  Subtitle,
  StyledButton,
  ButtonsRow,
  CardsSection,
  SectionHeading,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  CTASection,
  CTAInner,
  CTAButton,
  FixedBrandBar,
  BrandName,
  BrandLogo,
} from "./HomePage.styles.ts";

import { CalendarDays, Users, Table } from "lucide-react";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  function handleOpenRegister() {
    setShowSignup(true);
  }

  function handleOpenLogin() {
    setShowLogin(true);
  }

  return (
    <>
      <FixedBrandBar>
        <BrandName>KINGOURMET</BrandName>
        <BrandLogo src={logoKG} alt="Logotipo Kingourmet" />
      </FixedBrandBar>

      {/* HERO */}
      <HeroSection>
        <HeroContent>
          <HeroCopy>
            <Title>Gestiona tu restaurante sin fricciones</Title>
            <Subtitle>Experiencias memorables, datos en tiempo real</Subtitle>

            <ButtonsRow>
              <StyledButton variant="primary" onClick={handleOpenRegister}>
                Solicita Acceso
              </StyledButton>

              <StyledButton variant="outline" onClick={handleOpenLogin}>
                Iniciar Sesión
              </StyledButton>
            </ButtonsRow>
          </HeroCopy>
        </HeroContent>
      </HeroSection>

      {/* MODAL */}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
      {/* FEATURES */}
      <CardsSection>
        <SectionHeading>
          <SectionEyebrow>Suite inteligente</SectionEyebrow>
          <SectionTitle>Organiza, optimiza y sorprende</SectionTitle>
          <SectionDescription>
            Automatiza procesos diarios, ahorra tiempo al personal de sala y
            entrega una experiencia moderna a tus comensales desde el primer
            contacto hasta el pago.
          </SectionDescription>
        </SectionHeading>

        <FeaturesGrid>
          <FeatureCard>
            <IconWrapper>
              <Table size={32} color="#fff" />
            </IconWrapper>
            <h3>Editor Visual de Mesas</h3>
            <p>Diseña el plano de tu local en segundos con drag & drop.</p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <CalendarDays size={32} color="#fff" />
            </IconWrapper>
            <h3>Reservas Orquestadas</h3>
            <p>Coordina reservas y walk-ins con alertas inteligentes.</p>
          </FeatureCard>

          <FeatureCard>
            <IconWrapper>
              <Users size={32} color="#fff" />
            </IconWrapper>
            <h3>Portal de Clientes</h3>
            <p>Comparte un enlace único para reservas online 24/7.</p>
          </FeatureCard>
        </FeaturesGrid>
      </CardsSection>

      {/* CTA */}
      <CTASection>
        <CTAInner>
          <h2>¿Listo para revolucionar tu restaurante?</h2>
          <p>
            Únete a cientos de restaurantes que ya confían en nuestra
            plataforma.
          </p>
          <CTAButton onClick={handleOpenRegister}>Comenzar Ahora</CTAButton>
        </CTAInner>
      </CTASection>
    </>
  );
}
