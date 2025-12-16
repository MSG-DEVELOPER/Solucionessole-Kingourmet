// src/utils/resolveSwitchTitleEndpoint.ts

export function resolveSwitchTitleEndpoint(title: string): string | null {
    switch (title) {
      case "Ajustes Generales":
        return "localhost/kingourmet-api/api/configuracion";
  
      case "Horarios":
        return "/api/settings/horarios";
  
      case "Mesas":
        return "/api/mesas";
  
      default:
        return null;
    }
  }
  