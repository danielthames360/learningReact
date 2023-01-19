import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { TodoPage } from "./todo/pages/TodoPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>
);
