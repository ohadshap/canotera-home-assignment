import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import lawsData from '../data/default.json';
const StoreContext = createContext();
const StoreUpdateContext = createContext();
// use context (hook) to mock saving of new file
export const StoreProvider = ({ children }) => {
  const [laws, setLaws] = useState([]);
  const [fileLaws, setFileLaws] = useState([])
  const [language, setlanguage] = useState('he');
  
  // load default date
  useEffect(() => setLaws(lawsData.laws), [])

  return (
    <StoreContext.Provider value={{ laws, setLaws, language, setlanguage, fileLaws, setFileLaws }}>
        {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
export const useUpdateStore = () => useContext(StoreUpdateContext);
