import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { New } from "./pages/new";
import { Contents } from "./pages/contents";
import { Header } from "./components/header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/contents/:id" element={<Contents />} />
      </Routes>
    </BrowserRouter>
  );
};
