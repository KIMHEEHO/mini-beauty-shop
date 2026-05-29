import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom/client";

// 👇 MSW worker
async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser.js");
    return worker.start();
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
