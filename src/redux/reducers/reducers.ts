import { SEARCH_STATION, CHANGE_PAGE, SELECT_CONNECTOR, CHANGE_DATE, CHANGE_INPUT, SELECT_ENTRIES, SET_LODER, UPDT_MSG } from "../constant";
import { AnyAction } from "redux";


export interface StationObject {
  stationName: string,
  address: string,
  location: {
    lat: number,
    lang: number
  },
  ratesPerHour: number,
  connectorTypes: string[]
}

export interface StateType {
  // eslint-disable-next-line
  [x: string]: any;
  stationsData: StationObject[],
  pageNumber: number,
  date: string,
  connector: string,
  entries: number,
  isStationsLoading: boolean,
  message: string,
}

const initialState: StateType = {
  stationsData: [],
  inputValue: "",
  pageNumber: 1,
  date: "",
  connector: "",
  entries: 5,
  isStationsLoading: false,
  message: "",
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function GetStations(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_STATION:
      return {
        ...state,
        stationsData: action.payload,
      }

    case CHANGE_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber + action.payload,
      }

    case SELECT_CONNECTOR: 
      return {
        ...state,
        connector: action.payload,
      }

    case CHANGE_DATE: 
      return {
        ...state,
        date: action.payload,
      }

    case CHANGE_INPUT: 
      return {
        ...state,
        inputValue: action.payload,
      }

    case SELECT_ENTRIES:
      return {
        ...state,
        entries: action.payload,

      }  

    case SET_LODER:
      return {
        ...state,
        isStationsLoading: action.payload,
        
      }

    case UPDT_MSG:
      return {
        ...state,
        message: action.payload,
      }  

    default:
      return state;
  }

}
