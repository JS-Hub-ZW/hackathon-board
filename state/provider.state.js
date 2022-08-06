import { createContext, useContext, useState } from "react";
import reducer from "./reducer.state";
import initialState from "./state.state";
const Context = createContext();



export function ThemeProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}