// theme.ts
export const theme = {
  colors: {
    // Fondos
    background: "#f8fafc",   // blanco suave
    surface: "#ffffff",      // tarjetas, modales
    overlay: "rgba(0, 0, 0, 0.5)",

    // Tonos de gris
    gray100: "#f1f5f9", // texto claro / fondo secundario
    gray200: "#e2e8f0",
    gray300: "#cbd5e1",
    gray400: "#94a3b8",
    gray500: "#64748b", // texto secundario
    gray600: "#475569",
    gray700: "#334155", // fondo secciones oscuras

    // Tonos de azul
    blue100: "#dbeafe",
    blue200: "#bfdbfe",
    blue300: "#93c5fd",
    blue400: "#60a5fa",
    blue500: "#3b82f6",
    blue600: "#2563eb", // primary
    blue700: "#1d4ed8",
    blue800: "#1e40af",
    blue900: "#1e3a8a",

    // Negros / oscuros
    black100: "#1f2937",
    black200: "#111827",

    // Accentos
    accent: "#2563eb", // para botones y hover
    secondary: "#6cd85da1", // opcional
  },

  fonts: {
    main: "url('./assets/fonts/Futura Md BT Medium.ttf'), sans-serif",
    code: "'Fira Code', monospace",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "20px",
  },

  shadows: {
    light: "0 1px 4px rgba(0,0,0,0.1)",
    medium: "0 4px 12px rgba(0,0,0,0.15)",
    heavy: "0 8px 25px rgba(0,0,0,0.25)",
  },

  transitions: {
    fast: "all 0.2s ease-in-out",
    medium: "all 0.4s ease-in-out",
    slow: "all 0.6s ease-in-out",
  },

  breakpoints: {
    mobileSmall: "320px",
    mobile: "480px",
    tablet: "768px",
    tabletLandscape: "1024px",
    desktop: "1200px",
  },
};
