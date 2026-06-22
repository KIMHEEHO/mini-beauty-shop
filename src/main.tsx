import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom/client";

async function enableMocking() {
  console.log("MSW ENV:", import.meta.env.VITE_USE_MSW);

  if (import.meta.env.VITE_USE_MSW === "true") {
    const { worker } = await import("./mocks/browser.js");

    await worker.start({
      onUnhandledRequest: "bypass",
    });

    console.log("MSW STARTED");
  }
}

async function bootstrap() {
  await enableMocking();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

bootstrap();
