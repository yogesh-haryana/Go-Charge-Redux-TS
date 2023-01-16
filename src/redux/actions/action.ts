import { SEARCH_STATION, CHANGE_PAGE, SELECT_CONNECTOR, CHANGE_DATE, CHANGE_INPUT, SELECT_ENTRIES } from "../constant";
import { StateType } from "../reducers/reducers";

export const searchStation = (payload: StateType) => {
  return {
    type: SEARCH_STATION,
    payload: payload,
  }
}

export const chnageInputValue = (payload: string) => {
  return {
    type: CHANGE_INPUT,
    payload: payload,
  }
}

export const changePageNumber = (payload: number) => {
  return {
    type: CHANGE_PAGE,
    payload: payload,
  }
}

export const selectConnector = (payload: string) => {
  return {
    type: SELECT_CONNECTOR,
    payload: payload,
  }
}

export const changeDate = (payload: string) => {
  return {
    type: CHANGE_DATE,
    payload: payload,
  }
}

export const selectEntries = (payload: number) => {
  return {
    type: SELECT_ENTRIES,
    payload: payload,
  }
}