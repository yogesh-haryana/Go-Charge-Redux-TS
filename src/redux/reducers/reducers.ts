import { SEARCH_STATION } from "../constant";

const initialState = {
  stationsData: [],
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function GetStations(state = initialState, action) {
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