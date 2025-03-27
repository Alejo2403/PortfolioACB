import { useMobile } from "../context/MobileContext"

const Projects = () => {
  
  const {isMobile} = useMobile();
  
  return (
    <>
      {isMobile ? (
        <div>Desde cel pro</div>
      ) : (
        <div>Desde pantalla big</div>
      )}
    </>
  )
}

export default Projects