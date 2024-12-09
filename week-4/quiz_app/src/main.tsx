import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QuizContextProvider from "./context/app-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </StrictMode>
);