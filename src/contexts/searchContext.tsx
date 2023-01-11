import { createContext, useState } from "react";

interface Station {
  stationName: string;
  address: string;
  location: {
    lat: number;
    lang: number;
  };
  ratesPerHour: Number;
  connectorTypes: Array<string>;
}

export interface SearchContextType {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  stationsData: Station[];
  setStationsData: (stationsData: Station[]) => void;
}
export const searchContext = createContext<SearchContextType>({
  inputValue: "",
  setInputValue: () => {},
  stationsData: [],
  setStationsData: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppContext: React.FC<Props> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [stationsData, setStationsData] = useState<Station[]>([]);

  return (
    <searchContext.Provider
      value={{
        inputValue,
        setInputValue,
        stationsData,
        setStationsData,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default AppContext;
