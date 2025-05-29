import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Componentes/login/Index";
import Registro from "./Componentes/registro/Index";
import Favoritos from "./Componentes/favoritos/Index";
import Compare from "./Componentes/compare/Index";

import FruitsList from "./Componentes/fruits/FruitsList";
import FruitDetail from "./Componentes/fruits/FruitDetail";

import Nav from "./Componentes/shared/Nav";

export default function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<FruitsList />} />
        <Route path="/fruits" element={<FruitsList />} />
        <Route path="/fruits/:id" element={<FruitDetail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}
