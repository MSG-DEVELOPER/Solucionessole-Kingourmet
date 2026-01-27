// src/redux/slices/horarios/horariosSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Horario } from "../../../services/horarios/getHorarios";

interface HorariosState {
  data: Horario[];
}

const initialState: HorariosState = {
  data: [],
};

const horariosSlice = createSlice({
  name: "horarios",
  initialState,
  reducers: {
    setHorarios: (state, action: PayloadAction<Horario[]>) => {
      state.data = action.payload;
    },
    clearHorarios: (state) => {
      state.data = [];
    },
  },
});

export const { setHorarios, clearHorarios } = horariosSlice.actions;
export default horariosSlice.reducer;

