// src/services/auth/authService.ts

export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface User {
    id: number;
    establecimiento_id: number;
    nombre: string;
    apellidos: string | null;
    email: string;
    telefono: string | null;
    rol: string;
    estado: string;
    fecha_nacimiento: string | null;
    preferencias: string | null;
    notas: string | null;
    ultimo_acceso: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface LoginResponse {
    message: string;
    user: User;
    token: string;
    refresh_token: string;
    token_type: string;
    expires_in: number;
  }
  
  export async function login(data: LoginData): Promise<LoginResponse> {
    const res = await fetch("http://localhost/kingourmet-api/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (res.status === 401) {
      throw new Error("Credenciales");
    }

    if (res.status!==200) {
        throw new Error("Error en el servidor");
      }
      
  
    const json = await res.json();
    return json;
  }

