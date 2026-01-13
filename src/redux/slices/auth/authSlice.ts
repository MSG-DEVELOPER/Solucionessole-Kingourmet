// src/store/authSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  id_establecimiento: number;
  nombre: string;
  apellidos: string | null;
  email: string;
  telefono: string | null;
  id_rol: number;
  rol_nombre: string;
  estado: string;
  fecha_nacimiento: string | null;
  preferencias: string | null;
  notas: string | null;
  ultimo_acceso: string;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  user: User | null;
  establecimientoId: number | null;
  isLoggedIn: boolean;
}



const initialState: AuthState = {
  user: null,
  establecimientoId: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; establecimientoId: number }>) => {
      state.user = action.payload.user;
      state.establecimientoId = action.payload.establecimientoId;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.establecimientoId = null;
      state.isLoggedIn = false;
      // Limpiar token de sessionStorage
      sessionStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
