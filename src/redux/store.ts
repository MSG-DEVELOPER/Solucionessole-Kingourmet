// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import configReducer from "./slices/config/configSlice";

export const store = configureStore({
  reducer: {
    // aquía vamos añadir los slices
    auth: authReducer,
    config: configReducer,
  },
});

// Tipos para usar en el proyecto
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
