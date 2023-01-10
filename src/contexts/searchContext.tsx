import { ObjectId } from "mongodb";
import { createContext, useState } from "react";

interface Station {
  _id: ObjectId
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
}
export const searchContext = createContext<SearchContextType>({
  inputValue: "",
  setInputValue: () => {},
  stationsData: [],
  setStationsData: () => {},
  filtered: [],
  setFiltered: () => {},
});

interface Props {
  children: React.ReactNode;
}

const AppContext: React.FC<Props> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [stationsData, setStationsData] = useState<Station[]>([]);
  const [filtered, setFiltered] = useState<Station[]>([]);


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
