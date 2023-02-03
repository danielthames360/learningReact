import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
import "./style.css";

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsdGhhbWVzIiwiYSI6ImNsZG5ra3RmODBrN2Yzd3F1Nno1eXgycjQifQ.NEtUsOqJ9q7FkgN650Po6g';



if (!navigator.geolocation) {
  alert("Your browser does not have access to the map");
  throw new Error("Your browser does not have access to the map");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
