import { SEARCH_STATION } from "../constant";

export const searchStation = (payload) => {
  return {
    type: SEARCH_STATION,
    payload: payload,
  }
}