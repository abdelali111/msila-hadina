import React from "react";
import ReactDOM from "react-dom/client";
import { startInstance } from "./start";
import { getRouter } from "./router";

async function render() {
  const router = getRouter();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <router.Provider>{startInstance}</router.Provider>
    </React.StrictMode>
  );
}

render().catch(console.error);
