// src/store/configSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ConfigData {
  duracion_media_reserva?: number;
  tiempo_buffer?: number;
  anticipacion_minima?: number;
  anticipacion_maxima?: number;
  permitir_reservas_simultaneas?: boolean;
  max_comensales_por_reserva?: number;
  min_comensales_por_reserva?: number;
  tiempo_cortesia?: number;
  email_reservas?: string;
  permitir_reservas_online?: boolean;
  max_comensales_online?: number;
  politica_cancelacion?: string;
  dias_anticipacion_max?: number;
  dias_anticipacion_min?: number;
  [key: string]: unknown;
}

interface ConfigState {
  data: ConfigData | null;
}

const initialState: ConfigState = {
  data: null,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<ConfigData>) => {
      state.data = action.payload;
    },
    clearConfig: (state) => {
      state.data = null;
    },
  },
});

export const { setConfig, clearConfig } = configSlice.actions;
export default configSlice.reducer;
