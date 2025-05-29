import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/fruits" className={({ isActive }) => (isActive ? "active" : "")}>
        Fruits
      </NavLink>
      <NavLink to="/favoritos" className={({ isActive }) => (isActive ? "active" : "")}>
        Favoritos
      </NavLink>
      <NavLink to="/compare" className={({ isActive }) => (isActive ? "active" : "")}>
        Compare
      </NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
        Login
      </NavLink>
    </nav>
  );
}
