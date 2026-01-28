// src/redux/slices/mesas/mesasSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Mesa } from "../../../services/mesas/getMesas";

interface MesasState {
  data: Mesa[];
}

const initialState: MesasState = {
  data: [],
};

const mesasSlice = createSlice({
  name: "mesas",
  initialState,
  reducers: {
    setMesas: (state, action: PayloadAction<Mesa[]>) => {
      state.data = action.payload;
    },
    clearMesas: (state) => {
      state.data = [];
    },
  },
});

export const { setMesas, clearMesas } = mesasSlice.actions;
export default mesasSlice.reducer;
