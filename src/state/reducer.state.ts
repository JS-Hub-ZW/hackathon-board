import { Contributor, Hackathon } from "@/types/types";
import { Action, createSlice } from "@reduxjs/toolkit"

interface HackathonReducerState {
    hackathons: Hackathon[];
    contributors: Contributor[];
}

const reducer = (state:HackathonReducerState, action:any) => {

    switch (action.type) {
        case "ADD_HACKATHONS":
            return {
                ...state,
                hackathons: action.payload
            }
        case "ADD_CONTRIBUTERS":
            return {
                ...state,
                contributors: action.payload
            }
        default:
            return state
        
    }
}


const initialState = {
    hackathons: [],
    contributors: []
  }


  export const hackathonSlice = createSlice({
    name: "hackathon",
    initialState,
    reducers: {
        addHackathons: (state, action) => {
            state.hackathons = action.payload;
        },
        addContributors: (state, action) => {
            state.contributors = action.payload;
        }
    }
  })


    export const { addHackathons, addContributors } = hackathonSlice.actions;


export default hackathonSlice.reducer;


