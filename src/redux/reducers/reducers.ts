import { SEARCH_STATION } from "../constant";
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

export interface StateType  {
  // eslint-disable-next-line
  [x: string]: any;
  stationsData: StationObject[],
}

const initialState: StateType = {
  stationsData: [],
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function GetStations(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SEARCH_STATION:
      return {
        ...state,
        stationsData: action.payload,
      }

    default:
      return state;
  }        

}