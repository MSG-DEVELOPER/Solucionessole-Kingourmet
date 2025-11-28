import {
  HeroSection,
  Title,
  Subtitle,
  Description,
  ButtonsRow,
  StyledButton,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  CTASection,
  CTAInner,
  CTAButton
} from "./HomePage.styles.ts";

import { CalendarDays, Users, Table } from "lucide-react";

export default function HomePage() {
  function handleOpenRegister() {
    console.log("Abrir registro");
  }

  function handleOpenLogin() {
    console.log("Abrir login");
  }

  return (
    <>
      {/* HERO */}
      <HeroSection>
        <div className="container">
          <div className="text-block">
            <Title>Gestiona tu Restaurante</Title>
            <Subtitle>con Estilo</Subtitle>
            <Description>
              La plataforma más moderna para gestionar mesas, reservas y ofrecer
              una experiencia excepcional a tus clientes.
            </Description>

            <ButtonsRow>
              <StyledButton variant="primary" onClick={handleOpenRegister}>
                Crear Cuenta
              </StyledButton>

              <StyledButton variant="outline" onClick={handleOpenLogin}>
                Iniciar Sesión
              </StyledButton>
            </ButtonsRow>
          </div>
        </div>
      </HeroSection>

      {/* FEATURES — fuera del HERO */}
      <FeaturesGrid>
        <FeatureCard>
          <IconWrapper>
            <Table size={32} color="#fff" />
          </IconWrapper>
          <h3>Editor Visual de Mesas</h3>
          <p>Diseña tu salón arrastrando y soltando mesas.</p>
        </FeatureCard>

        <FeatureCard>
          <IconWrapper>
            <CalendarDays size={32} color="#fff" />
          </IconWrapper>
          <h3>Gestión de Reservas</h3>
          <p>Calendario intuitivo para gestionar todas tus reservas.</p>
        </FeatureCard>

        <FeatureCard>
          <IconWrapper>
            <Users size={32} color="#fff" />
          </IconWrapper>
          <h3>Reservas Online</h3>
          <p>URL única para cada restaurante. Reservas 24/7.</p>
        </FeatureCard>
      </FeaturesGrid>

      {/* CTA */}
      <CTASection>
        <CTAInner>
          <h2>¿Listo para revolucionar tu restaurante?</h2>
          <p>Únete a cientos de restaurantes que ya confían en nuestra plataforma.</p>
          <CTAButton onClick={handleOpenRegister}>Comenzar Ahora</CTAButton>
        </CTAInner>
      </CTASection>
    </>
  );
}
