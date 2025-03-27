import '../styles/AboutMe.css';

import { useMobile } from "../context/MobileContext";

const AboutMe = () => {

  const {isMobile} = useMobile();
  
  return (
    <>
      {isMobile ? (
        <div>desde cel phone</div>
      ) : (
        <div>desde pantalla big</div>
      )}
    </>
  )
}

export default AboutMe