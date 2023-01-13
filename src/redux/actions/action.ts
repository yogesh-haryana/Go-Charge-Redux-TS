import { SEARCH_STATION, CHANGE_PAGE } from "../constant";
import { StateType } from "../reducers/reducers";

export const searchStation = (payload: StateType) => {
  return {
    type: SEARCH_STATION,
    payload: payload,
  }
}

export const changePageNumber = (payload: StateType) => {
  return {
    type: CHANGE_PAGE,
    payload: payload,
  }
}