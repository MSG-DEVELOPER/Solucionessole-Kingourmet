// src/services/authService.ts

export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface User {
    id: number;
    nombre: string;
    email: string;
    rol: string;
    [key: string]: any;
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
  