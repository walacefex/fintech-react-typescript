import React from "react";

type IUiContext = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const UiContext = React.createContext<IUiContext | null>(null) 

export const useUiContext = () => {
  const context = React.useContext(UiContext);

  if (context === null) {
    throw new Error("useUiContext must be used within a UiContextProvider");
  }

  return context;
}

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [darkMode, setDarkMode] = React.useState(false);

  return ( 
    <UiContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </UiContext.Provider> 
  )
}
