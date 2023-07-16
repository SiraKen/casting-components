import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Clock } from "./components/Clock";
import { Counter } from "./components/Counter";
import { Page404 } from "./pages/404";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/clock/:unit/:delay" element={<Clock />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
);
