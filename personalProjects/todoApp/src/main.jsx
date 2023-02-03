import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { TodoPage } from "./todo/pages/TodoPage";
import { TodoProvider } from "./context/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoPage />
    </TodoProvider>
  </React.StrictMode>
);
