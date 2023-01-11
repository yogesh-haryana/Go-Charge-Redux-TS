import { Action } from "@reduxjs/toolkit";
import { SEARCH_STATION } from "../constant";

const initialState = {
    stationsData: [
        // {
        //     stationName: "HP filling Station",
        //     address: "mayur vihar extension, delhi",
        //     location: {
        //         lat: 28.597661,
        //         lang: 77.293117
        //     },
        //     ratesPerHour: 145,
        //     connectorTypes: ["5-pins", "7-pins", "12-pins"]
        // }
    ]
}

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