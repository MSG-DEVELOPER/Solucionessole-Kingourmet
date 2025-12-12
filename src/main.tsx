import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from "sonner";
import { theme } from "./theme.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <StrictMode>
          <App />
          <Toaster 
            position="bottom-right"
            expand={true}
            richColors={false}
            closeButton={true}
          />
        </StrictMode>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
