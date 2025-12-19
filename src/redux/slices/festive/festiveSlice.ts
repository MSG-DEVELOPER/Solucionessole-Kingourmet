// src/redux/slices/festive/festiveSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Festivo {
  id: number;
  establecimiento_id: number;
  nombre: string;
  fecha: string;
  fecha_fin: string | null;
  tipo: string;
  es_recurrente: number;
  descripcion: string | null;
  cerrado: number;
  horario_especial: string | null;
  created_at: string;
  updated_at: string;
}

interface FestiveState {
  data: Festivo[];
}

const initialState: FestiveState = {
  data: [],
};

const festiveSlice = createSlice({
  name: "festive",
  initialState,
  reducers: {
    setFestivos: (state, action: PayloadAction<Festivo[]>) => {
      state.data = action.payload;
    },
    clearFestivos: (state) => {
      state.data = [];
    },
  },
});

export const { setFestivos, clearFestivos } = festiveSlice.actions;
export default festiveSlice.reducer;

