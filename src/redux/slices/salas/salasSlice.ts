// src/redux/slices/salas/salasSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Sala } from "../../../services/salas/getSalas";

interface SalasState {
  data: Sala[];
}

const initialState: SalasState = {
  data: [],
};

const salasSlice = createSlice({
  name: "salas",
  initialState,
  reducers: {
    setSalas: (state, action: PayloadAction<Sala[]>) => {
      state.data = action.payload;
    },
    clearSalas: (state) => {
      state.data = [];
    },
  },
});

export const { setSalas, clearSalas } = salasSlice.actions;
export default salasSlice.reducer;
