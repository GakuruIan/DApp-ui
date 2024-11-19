import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { AccountProvider } from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </StrictMode>
);
