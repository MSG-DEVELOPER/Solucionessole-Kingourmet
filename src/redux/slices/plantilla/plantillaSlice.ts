// src/redux/slices/plantilla/plantillaSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Usuario } from "../../../services/plantilla/getPlantilla";

interface PlantillaState {
  data: Usuario[];
}

const initialState: PlantillaState = {
  data: [],
};

const plantillaSlice = createSlice({
  name: "plantilla",
  initialState,
  reducers: {
    setPlantilla: (state, action: PayloadAction<Usuario[]>) => {
      state.data = action.payload;
    },
    clearPlantilla: (state) => {
      state.data = [];
    },
  },
});

export const { setPlantilla, clearPlantilla } = plantillaSlice.actions;
export default plantillaSlice.reducer;

