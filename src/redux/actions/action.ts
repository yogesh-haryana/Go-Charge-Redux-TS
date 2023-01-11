import { SEARCH_STATION } from "../constant";
import { StateType } from "../reducers/reducers";

export const searchStation = (payload: StateType) => {
  return {
    type: SEARCH_STATION,
    payload: payload,
  }
}