import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Workflow(){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

}

export default Workflow;

