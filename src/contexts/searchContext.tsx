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
  distance: number;
}

export interface SearchContextType {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  stationsData: Station[];
  setStationsData: (stationsData: Station[]) => void;
  filtered: Station[];
  setFiltered: (filtered: Station[]) => void;
  filterStatus: boolean,
  setFilterStatus: (filterStatus: boolean) => void,
}
export const searchContext = createContext<SearchContextType>({
  inputValue: "",
  setInputValue: () => {},
  stationsData: [],
  setStationsData: () => {},
  filtered: [],
  setFiltered: () => {},
  filterStatus: true,
  setFilterStatus: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppContext: React.FC<Props> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [stationsData, setStationsData] = useState<Station[]>([]);
  const [filtered, setFiltered] = useState<Station[]>([]);
  const [filterStatus, setFilterStatus] = useState<boolean>(true);

  return (
    <searchContext.Provider
      value={{
        inputValue,
        setInputValue,
        stationsData,
        setStationsData,
        filtered,
        setFiltered,
        filterStatus,
        setFilterStatus,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default AppContext;
