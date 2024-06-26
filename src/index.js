import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Auth/AuthContext.js';

import SideMenu from "./components/SideMenu";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <SideMenu />
      <Main />
    </AuthProvider>
  </BrowserRouter>
);