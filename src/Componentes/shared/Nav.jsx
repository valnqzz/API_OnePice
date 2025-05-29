import { NavLink } from "react-router-dom";

import "./Nav.css";

const links = [
  {
    to: "/fruits",
    label: "Frutas",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    to: "/favoritos",
    label: "Favoritos",
    icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
  },
  {
    to: "/compare",
    label: "Comparar",
    icon: "https://cdn-icons-png.flaticon.com/512/709/709496.png",
  },
  {
    to: "/login",
    label: "Iniciar sesión",
    icon: "https://cdn-icons-png.flaticon.com/512/709/709699.png",
  },
  {
    to: "/registro",
    label: "Registro",
    icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
  },
];

export default function Nav() {
  return (
    <nav className="nav">
      {links.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")}
        >
          <img src={icon} alt={`${label} icono`} className="nav-icon" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
