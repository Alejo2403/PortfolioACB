import { createContext, useContext, useState } from 'react';

// Crear el contexto
const MobileContext = createContext();

// Proveedor del contexto
export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Actualizar estado al redimensionar
  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth <= 768);
  });

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useMobile = () => useContext(MobileContext);