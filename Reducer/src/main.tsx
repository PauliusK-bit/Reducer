import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CounterReducerPage from "./pages/CounterReducerPage/CounterReducerPage";
import { BrowserRouter, Route, Routes } from "react-router";
import UsersPage from "./pages/UsersPage/UsersPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="reducer">
          <Route path="counter-ts" element={<CounterReducerPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
