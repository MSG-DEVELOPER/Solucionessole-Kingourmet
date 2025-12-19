// src/utils/resolveSwitchTitleEndpoint.ts
//aqui entran los titulos de los settings y se devuelve el endpoint correspondiente
export function resolveSwitchTitleEndpoint(title: string): string | null {
    switch (title) {
      case "Ajustes Generales":
        return "kingourmet-api/api/configuracion";
  
      case "Establecimiento":
        return "kingourmet-api/api/establecimientos";
  
    
  
      default:
        return null;
    }
  }
  