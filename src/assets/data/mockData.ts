// mockData.ts
export const mockData: Record<string, any[]> = {
    "Reservas": [
      { ID: 1, Cliente: "Juan Pérez", Fecha: "2025-12-01", Estado: "Confirmada" },
      { ID: 2, Cliente: "María López", Fecha: "2025-12-02", Estado: "Pendiente" },
    ],
    "Clientes": [
      { Nombre: "Juan Pérez", Email: "juan@example.com", Teléfono: "123456789" },
      { Nombre: "María López", Email: "maria@example.com", Teléfono: "987654321" },
    ],
    "Mesas": [
      { Mesa: "1", Capacidad: 4, Ubicación: "Interior" },
      { Mesa: "2", Capacidad: 2, Ubicación: "Terraza" },
    ],
    "Horarios": [
      { Día: "Lunes", Apertura: "09:00", Cierre: "22:00" },
      { Día: "Martes", Apertura: "09:00", Cierre: "22:00" },
    ],
    "Duraciones": [
      { Servicio: "Comida", Duración: "60 min" },
      { Servicio: "Cena", Duración: "90 min" },
    ],
    "Aperturas": [
      { Fecha: "2025-12-24", Apertura: "10:00", Cierre: "18:00" },
      { Fecha: "2025-12-31", Apertura: "10:00", Cierre: "16:00" },
    ],
    "Plantillas": [
      { Nombre: "Laura", Rol: "Camarera" },
      { Nombre: "Pau", Rol: "Cocinero" },
    ],
    "Integraciones": [
      { Servicio: "Google Calendar", Estado: "Conectado" },
      { Servicio: "Instagram API", Estado: "Desconectado" },
    ],
    "Seguridad": [
      { Usuario: "admin", Rol: "Administrador" },
      { Usuario: "maria", Rol: "Empleado" },
    ],
    "Idioma y Región": [
      { Idioma: "Español", ZonaHoraria: "CET" },
      { Idioma: "Inglés", ZonaHoraria: "GMT" },
    ],
    "Estadísticas": [
      { Métrica: "Reservas Totales", Valor: 120 },
      { Métrica: "Clientes Nuevos", Valor: 45 },
    ],
    "Ajustes Generales": [
      { Configuración: "Notificaciones", Valor: "Activadas" },
      { Configuración: "Modo Oscuro", Valor: "Desactivado" },
    ],
  };
  