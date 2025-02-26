import { useMobile } from "../context/MobileContext"

const AboutMe = () => {
  const isMobile = useMobile();
  
  return (
    <>
      <p>AboutMe</p>
    </>
  )
}

export default AboutMe