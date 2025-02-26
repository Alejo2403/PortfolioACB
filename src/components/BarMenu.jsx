import { useMobile } from '../context/MobileContext';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import '../styles/BarMenu.css'

export const BarMenu = () => {

  /*HASTA ACA %$$%$%$%$%$% */
  const { isMobile } = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("Open to work");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if(window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <>
      {isMobile ? (
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="vertical-text">{menuOpen ? "Close Menu" : "Open Menu"}</span>
          </div>
          {menuOpen && (
            <div className={`bar-menu mobile ${menuOpen ? "menu-open" : "menu-closed"}`}>
              <div className="name-container">
                <div className="first-name">Alejandro</div>
                <div className="last-name">Cardona Barrera</div>
                <div className='status'>
                  <span
                    className='status-circle'
                    style={{ background: getStatusColor(status)}}
                  ></span>
                  <span className='status-text'>{status}</span>
                </div>
              </div>
              <ul className="nav-menu">
                <li><Link to="/" className='nav-item'>About me</Link></li>
                <li><Link to="/projects" className='nav-item'>Projects</Link></li>
                <li><Link to="/experiences" className='nav-item'>Experiences</Link></li>
                <li><Link to="/contactme" className='nav-item'>Contact Me</Link></li>
              </ul>
              <div className="logo-container">

              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bar-menu">
          <div className="name-container">
            <div className="first-name">Alejandro</div>
            <div className="last-name">Cardona Barrera</div>
            <div className='status'>
              <span
                className='status-circle'
                style={{ background: getStatusColor(status)}}
              ></span>
                <span className='status-text'>{status}</span>
              </div>
          </div>
          <ul className="nav-menu">
            <li><Link to="/" className='nav-item'>About me</Link></li>
            <li><Link to="/projects" className='nav-item'>Projects</Link></li>
            <li><Link to="/experiences" className='nav-item'>Experiences</Link></li>
            <li><Link to="/contactme" className='nav-item'>Contact Me</Link></li>
          </ul>
          <div className="logo-container">
            
          </div>
        </div>
      )}
    </>
  )
}
