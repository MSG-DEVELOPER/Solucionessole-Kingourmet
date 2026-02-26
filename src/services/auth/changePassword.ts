// src/services/auth/changePassword.ts

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
}

export interface ChangePasswordResponse {
  message?: string;
}

export async function changePassword(
  token: string,
  payload: ChangePasswordPayload
): Promise<ChangePasswordResponse> {
  const res = await fetch(
    "http://localhost/kingourmet-api/api/auth/change-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Credenciales incorrectas");
    }
    if (res.status === 400) {
      throw new Error("Contraseña actual incorrecta o contraseña no válida");
    }
    throw new Error("Error al cambiar la contraseña");
  }

  return res.json().catch(() => ({}));
}
