// src/store/establishmentSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Sala {
  id: number;
  establecimiento_id: number;
  nombre: string;
  descripcion?: string;
  capacidad_maxima: number;
  ancho?: string;
  alto?: string;
  estado: string;
  orden?: number;
}

export interface Estadisticas {
  total_salas: number;
  total_mesas: number;
  capacidad_total_real: string;
  mesas_disponibles: number;
  mesas_ocupadas: number;
  mesas_reservadas: number;
}

export interface EstablishmentData {
  id: number;
  nombre: string;
  direccion?: string;
  telefono?: string;
  email?: string;
  descripcion?: string;
  logo?: string | null;
  capacidad_total?: number;
  estado: string;
  salas: Sala[];
  estadisticas: Estadisticas;
  [key: string]: unknown;
}

interface EstablishmentState {
  data: EstablishmentData | null;
}

const initialState: EstablishmentState = {
  data: null,
};

const establishmentSlice = createSlice({
  name: "establishment",
  initialState,
  reducers: {
    setEstablishment: (state, action: PayloadAction<EstablishmentData>) => {
      state.data = action.payload;
    },
    clearEstablishment: (state) => {
      state.data = null;
    },
  },
});

export const { setEstablishment, clearEstablishment } =
  establishmentSlice.actions;

export default establishmentSlice.reducer;
