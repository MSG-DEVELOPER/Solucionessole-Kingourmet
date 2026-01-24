// src/redux/slices/clientes/clientesSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Cliente } from "../../../services/clientes/getClientes";

interface ClientesState {
  data: Cliente[];
}

const initialState: ClientesState = {
  data: [],
};

const clientesSlice = createSlice({
  name: "clientes",
  initialState,
  reducers: {
    setClientes: (state, action: PayloadAction<Cliente[]>) => {
      state.data = action.payload;
    },
    clearClientes: (state) => {
      state.data = [];
    },
  },
});

export const { setClientes, clearClientes } = clientesSlice.actions;
export default clientesSlice.reducer;
