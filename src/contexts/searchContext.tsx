import React, { createContext, useState } from "react";

export const searchContext = createContext();

const AppContext = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [stationsData, setStationsData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  return (
    <searchContext.Provider
      value={{
        inputValue,
        setInputValue,
        stationsData,
        setStationsData,
        filtered,
        setFiltered,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default AppContext;
