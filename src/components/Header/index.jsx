import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navlinks">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Project
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/careers"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Careers
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="menu-overlay">
          <nav className="menu-links">
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/careers">Careers</NavLink>
            <NavLink to="/services">Service</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
