import { configureStore } from "@reduxjs/toolkit";
import hackathonReducer from "./reducer.state";

export const store = configureStore({
  reducer: {
    hackathon: hackathonReducer,
  },
});

// Define the RootState and AppDispatch types based on the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
