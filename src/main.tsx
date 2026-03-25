import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import "./index.css";
import { authClient } from "./lib/auth.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </NeonAuthUIProvider>
  </StrictMode>,
);
