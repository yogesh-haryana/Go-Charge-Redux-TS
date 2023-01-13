import { SEARCH_STATION, CHANGE_PAGE } from "../constant";
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
}

const initialState: StateType = {
  stationsData: [],
  pageNumber: 1,
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

    default:
      return state;
  }

}
