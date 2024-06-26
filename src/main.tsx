import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <div className="sm:max-w-2xl mx-auto">
      <div className="bg-neutral text-neutral-contrast min-h-screen">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
const debugBorders = () => {
  const style = document.createElement("style");
  style.innerText = `* {border: 1px solid #FF00FF !important; }`;
  document.head.appendChild(style);
};
import.meta.env.DEV &&
  import.meta.env.VITE_debug_borders?.match(/true/i) &&
  debugBorders();
