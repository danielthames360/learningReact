import React from "react";
import ReactDom from "react-dom/client";
import { CatPage } from "./CatPage";

import "./styles.css";

const root = ReactDom.createRoot(document.getElementById("app"));

root.render(<CatPage />);
