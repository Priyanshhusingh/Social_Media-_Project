import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";
import { AuthContextProvider } from "./context/authcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <DarkModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </DarkModeContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
