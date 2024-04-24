import React from "react";
import ReactDOM from "react-dom/client";
import Entry from "./components/Entry";
import Documents from "./components/Documents";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import Versions from "./components/Versions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideMenu/>
    <Entry/>
  </React.StrictMode>
);
