import { Children, createContext, useContext, useState } from "react";

//Context
const MobileContext = createContext();

export const MobileProvider =({children}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 768);
    });

    return (
        <MobileContext.Provider value={{isMobile, setIsMobile}}>
            {children}
        </MobileContext.Provider>
    );
};

//Hook
export const useMobile = () => useContext(MobileContext);