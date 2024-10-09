import { configureStore } from "@reduxjs/toolkit";
import hackathonReducer from "./reducer.state";



export const store = configureStore({
    reducer: {
        hackathon: hackathonReducer
    },
});

    