import { useMobile } from '../context/MobileContext';

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'

import '../styles/BarMenu.css'

export const BarMenu = () => {
  const {isMobile} = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("Open to work");
  const location = useLocation();

  // Control de estado laboral
  const getStatusColor = (status) => {
    switch(status) {
      case "Open to work":
        return "#39FF14";
      case "Open to offers":
        return "yellow";
      case "Unavailable":
        return "red";
    }
  }

  return (
    <div className={`bar-menu-wrapper ${isMobile ? "mobile" : "desktop"}`}>
    {/* Contenido del menú */}
    <div className={`bar-menu ${menuOpen ? "menu-open" : "menu-closed"}`}>
      <div className="name-container">
        <div className="first-name">Alejandro</div>
        <div className="last-name">Cardona Barrera</div>
        <div className="status">
          <span
            className="status-circle"
            style={{ background: getStatusColor(status) }}
          ></span>
          <span className="status-text">{status}</span>
        </div>
      </div>
      <ul className="nav-menu">
        <li>
          <Link 
            to="/" 
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            About me
          </Link>
        </li>
        <li>
          <Link 
            to="/projects" 
            className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/experiences" 
            className={`nav-item ${location.pathname === "/experiences" ? "active" : ""}`}
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link 
            to="/contactme" 
            className={`nav-item ${location.pathname === "/contactme" ? "active" : ""}`}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </div>

    {/* Botón para abrir/cerrar el menú */}
    {isMobile && (
      <div className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="vertical-text">{menuOpen ? "Close Menu" : "Open Menu"}</span>
      </div>
    )}
  </div>
  )
}
