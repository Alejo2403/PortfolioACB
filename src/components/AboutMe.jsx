import '../styles/AboutMe.css';

import photo from '../assets/img/photo.jpeg';

const AboutMe = () => {
  
  return (
    <div className="profile-container">
      <div className="p-tittle">
        <h1>Profile</h1>
      </div>
      <div className='p-content'>
        <img src={photo} alt="" className="photo" />
        <p className="description">
          I am a Systems Technologist passionate about developing innovative information solutions and currently seeking an internship opportunity. My training has provided me with strong knowledge in software development, databases, and web development. I am committed to continuous improvement and solving technological challenges. My focus is on delivering high-quality solutions that meet the highest industry standards.
        </p>
      </div>
      <div className="contacts-profile">
        <a href="https://github.com/Alejo2403" target="_blank" rel="noopener noreferrer" className="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span> 
        </a>

        <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.152-1.919-3.152-1.919 0-2.213 1.5-2.213 3.051v5.601h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.041 0 3.601 2.001 3.601 4.601v5.591z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        <a href="./public/downloads/HV.pdf" download className="social-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon download-icon">
            <path d="M12 16l4-4h-3V4h-2v8H8l4 4zm-7 2v2h14v-2H5z"/>
          </svg>
          <span>MyCV</span>
        </a>
      </div>
      <div class="skills-section">
        <h2 class="skills-title">Skills</h2>
        <div class="skills">
          <div class="skill">
            <i class="fab fa-html5"></i>
            <span>HTML</span>
          </div>
          <div class="skill">
            <i class="fab fa-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div class="skill">
            <i class="fab fa-js-square"></i>
            <span>JavaScript</span>
          </div>
          <div class="skill">
            <i class="fab fa-react"></i>
            <span>React</span>
          </div>
          <div class="skill">
            <i class="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div class="skill">
            <i class="fab fa-git-alt"></i>
            <span>Git</span>
          </div>
          <div class="skill">
            <i class="fas fa-database"></i>
            <span>SQL</span>
          </div>
          <div class="skill">
            <i class="fas fa-bolt"></i>
            <span>PowerApps</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe