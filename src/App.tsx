import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
