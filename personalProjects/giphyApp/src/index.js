import React from "react";
import ReactDom from "react-dom/client";
import { AppPage } from "./AppPage";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(<AppPage />);
