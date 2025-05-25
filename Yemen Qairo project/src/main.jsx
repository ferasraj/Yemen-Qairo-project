import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import "@fontsource/cairo/700.css"; // للوزن 700 مثلاً
import "@fontsource/cairo"; // الوزن الافتراضي 400

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
