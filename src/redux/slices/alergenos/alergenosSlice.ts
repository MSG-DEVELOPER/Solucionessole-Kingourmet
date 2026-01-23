// src/redux/slices/alergenos/alergenosSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Alergeno } from "../../../services/alergenos/getAlergenos";

interface AlergenosState {
  data: Alergeno[];
}

const initialState: AlergenosState = {
  data: [],
};

const alergenosSlice = createSlice({
  name: "alergenos",
  initialState,
  reducers: {
    setAlergenos: (state, action: PayloadAction<Alergeno[]>) => {
      state.data = action.payload;
    },
    clearAlergenos: (state) => {
      state.data = [];
    },
  },
});

export const { setAlergenos, clearAlergenos } = alergenosSlice.actions;
export default alergenosSlice.reducer;
