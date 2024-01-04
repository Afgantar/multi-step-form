import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormContextProvider } from "./context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormContextProvider>
    <App />
  </FormContextProvider>
);
