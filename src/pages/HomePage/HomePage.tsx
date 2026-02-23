import { useState } from "react";
import LoginForm from "../../components/modals/LoginForm/LoginForm";
import SignupForm from "../../components/modals/SignupForm/SignupForm";
import logoKG from "../../assets/icons/Kingourmet_no_bg.svg";
import logoSoluciones from "../../assets/icons/Soluciones.png";

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
  ProblemSection,
  ProblemInner,
  ProblemEyebrow,
  ProblemTitle,
  PainPointsList,
  PainPoint,
  HowItWorksSection,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepText,
  StatsSection,
  StatsGrid,
  StatItem,
  StatValue,
  StatLabel,
  BeforeAfterSection,
  CompareGrid,
  CompareCard,
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialAuthor,
  TestimonialRole,
  FAQSection,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Footer,
  FooterInner,
  FooterBrand,
  FooterLinks,
  FooterCopy,
  FooterPowered,
  FooterPoweredLink,
  FooterPoweredText,
  FooterPoweredLogo,
} from "./HomePage.styles.ts";

import {
  CalendarDays,
  Users,
  Table,
  ChevronDown,
  Phone,
  ClipboardList,
  Clock,
  Quote,
} from "lucide-react";

const FAQ_DATA = [
  {
    q: "¿Cuánto tarda en estar operativo?",
    a: "En menos de 24 horas puedes tener tu establecimiento configurado: plano de mesas, horarios y portal de reservas. Nuestro equipo te guía en el proceso.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Trabajamos con infraestructura en la nube y buenas prácticas de seguridad. Tus datos de clientes y reservas están protegidos y respaldados.",
  },
  {
    q: "¿Puedo probarlo antes de comprometerme?",
    a: "Ofrecemos acceso de prueba para que conozcas la plataforma con tu equipo. Contáctanos y te preparamos una demo a medida de tu restaurante.",
  },
  {
    q: "¿Funciona en tablet y móvil?",
    a: "Totalmente. La sala puede gestionar reservas y mesas desde tablet; los clientes reservan desde el móvil. Todo responsive y rápido.",
  },
];

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

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
      <CardsSection id="producto">
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

      {/* PROBLEM */}
      <ProblemSection>
        <ProblemInner>
          <ProblemEyebrow>¿Te suena?</ProblemEyebrow>
          <ProblemTitle>
            Reservas por WhatsApp, mesas en papel y clientes sin historial
          </ProblemTitle>
          <PainPointsList>
            <PainPoint>
              <Phone size={20} color="var(--color-blue600, #2563eb)" />
              Dobles reservas y llamadas que no cesan
            </PainPoint>
            <PainPoint>
              <ClipboardList size={20} color="var(--color-blue600, #2563eb)" />
              Cuadernos y hojas que se pierden
            </PainPoint>
            <PainPoint>
              <Clock size={20} color="var(--color-blue600, #2563eb)" />
              Tiempo perdido en tareas repetitivas
            </PainPoint>
          </PainPointsList>
        </ProblemInner>
      </ProblemSection>

      {/* HOW IT WORKS */}
      <HowItWorksSection id="como-funciona">
        <SectionHeading>
          <SectionEyebrow>En tres pasos</SectionEyebrow>
          <SectionTitle>Cómo funciona Kingourmet</SectionTitle>
          <SectionDescription>
            Configura tu local una vez y deja que la plataforma trabaje por ti.
          </SectionDescription>
        </SectionHeading>
        <StepsGrid>
          <StepCard $delay={0}>
            <StepNumber>1</StepNumber>
            <StepTitle>Configura tu local</StepTitle>
            <StepText>
              Sube el plano, define salas, mesas y horarios. Todo desde un panel
              intuitivo.
            </StepText>
          </StepCard>
          <StepCard $delay={1}>
            <StepNumber>2</StepNumber>
            <StepTitle>Recibe reservas 24/7</StepTitle>
            <StepText>
              Comparte tu enlace: los comensales reservan online y tú ves todo
              en tiempo real.
            </StepText>
          </StepCard>
          <StepCard $delay={2}>
            <StepNumber>3</StepNumber>
            <StepTitle>Gestiona sala sin fricciones</StepTitle>
            <StepText>
              Asigna mesas, controla ocupación y ofrece una experiencia
              memorable a cada visita.
            </StepText>
          </StepCard>
        </StepsGrid>
      </HowItWorksSection>

      {/* STATS */}
      <StatsSection>
        <SectionHeading>
          <SectionEyebrow style={{ color: "rgba(255,255,255,0.9)" }}>
            Resultados reales
          </SectionEyebrow>
          <SectionTitle style={{ color: "white", WebkitTextFillColor: "white", background: "none" }}>
            Cifras que hablan
          </SectionTitle>
        </SectionHeading>
        <StatsGrid>
          <StatItem>
            <StatValue>+15 min</StatValue>
            <StatLabel>Menos por turno en gestión manual</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>24/7</StatValue>
            <StatLabel>Reservas sin depender del teléfono</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatLabel>Visibilidad de ocupación en tiempo real</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>1</StatValue>
            <StatLabel>Plataforma para restaurante y cliente</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      {/* BEFORE / AFTER */}
      <BeforeAfterSection>
        <SectionHeading>
          <SectionEyebrow>Antes y después</SectionEyebrow>
          <SectionTitle>El cambio que notarás desde el día uno</SectionTitle>
          <SectionDescription>
            De la improvisación al control total sin cambiar tu esencia.
          </SectionDescription>
        </SectionHeading>
        <CompareGrid>
          <CompareCard $variant="before">
            <h3>Sin Kingourmet</h3>
            <ul>
              <li>Reservas por teléfono y WhatsApp, sin centralizar</li>
              <li>Plano en papel o en la cabeza de alguien</li>
              <li>Sin historial de comensales ni preferencias</li>
              <li>Doble reserva y conflictos de mesas</li>
            </ul>
          </CompareCard>
          <CompareCard $variant="after">
            <h3>Con Kingourmet</h3>
            <ul>
              <li>Un solo canal: reservas online y panel unificado</li>
              <li>Editor visual de mesas y salas siempre actualizado</li>
              <li>Base de clientes con historial y notas</li>
              <li>Alertas y ocupación en tiempo real</li>
            </ul>
          </CompareCard>
        </CompareGrid>
      </BeforeAfterSection>

      {/* TESTIMONIALS */}
      <TestimonialsSection>
        <SectionHeading>
          <SectionEyebrow>Voces del sector</SectionEyebrow>
          <SectionTitle>Lo que dicen quienes ya confían en nosotros</SectionTitle>
          <SectionDescription>
            Gerentes y dueños de restaurantes que han dado el paso.
          </SectionDescription>
        </SectionHeading>
        <TestimonialsGrid>
          <TestimonialCard>
            <Quote size={28} color="var(--color-blue400, #60a5fa)" style={{ marginBottom: "0.5rem" }} />
            <p>
              Por fin dejamos de depender del cuaderno y las llamadas. Las
              reservas llegan solas y la sala sabe en todo momento qué hay
              ocupado.
            </p>
            <TestimonialAuthor>María G.</TestimonialAuthor>
            <TestimonialRole>Gerente — Restaurante La Viña</TestimonialRole>
          </TestimonialCard>
          <TestimonialCard>
            <Quote size={28} color="var(--color-blue400, #60a5fa)" style={{ marginBottom: "0.5rem" }} />
            <p>
              El editor de mesas nos permitió replicar el local al detalle. Los
              clientes reservan por la web y nosotros gestionamos todo desde la
              tablet.
            </p>
            <TestimonialAuthor>Carlos R.</TestimonialAuthor>
            <TestimonialRole>Dueño — Bistro del Mar</TestimonialRole>
          </TestimonialCard>
          <TestimonialCard>
            <Quote size={28} color="var(--color-blue400, #60a5fa)" style={{ marginBottom: "0.5rem" }} />
            <p>
              Profesional, sencillo y con soporte que responde. Hemos reducido
              errores de reserva y el equipo de sala está más tranquilo.
            </p>
            <TestimonialAuthor>Laura M.</TestimonialAuthor>
            <TestimonialRole>Directora — Terraza Norte</TestimonialRole>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsSection>

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

      {/* FAQ */}
      <FAQSection>
        <SectionHeading>
          <SectionEyebrow>Preguntas frecuentes</SectionEyebrow>
          <SectionTitle>Todo lo que necesitas saber</SectionTitle>
          <SectionDescription>
            Respuestas rápidas a las dudas más habituales.
          </SectionDescription>
        </SectionHeading>
        <FAQList>
          {FAQ_DATA.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion
                type="button"
                $open={faqOpenIndex === index}
                onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
              >
                <span>{item.q}</span>
                <ChevronDown size={22} />
              </FAQQuestion>
              <FAQAnswer $open={faqOpenIndex === index}>
                <p>{item.a}</p>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQSection>

      {/* FOOTER */}
      <Footer>
        <FooterInner>
          <FooterBrand>
            <img src={logoKG} alt="Kingourmet" width={32} height={32} />
            KINGOURMET
          </FooterBrand>
          <FooterLinks>
            <a href="#producto">Producto</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); handleOpenRegister(); }}>Contacto</a>
          </FooterLinks>
          <FooterCopy>© {new Date().getFullYear()} Kingourmet. Todos los derechos reservados.</FooterCopy>
        </FooterInner>
        <FooterPowered>
          <FooterPoweredLink
            href="https://solucionessole.com/home/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FooterPoweredText>
              Powered by <strong>Soluciones Solé</strong>
              <FooterPoweredLogo
                src={logoSoluciones}
                alt="Soluciones Solé"
              />
            </FooterPoweredText>
          </FooterPoweredLink>
        </FooterPowered>
      </Footer>
    </>
  );
}
