import { createContext, useContext, useReducer} from "react";
import reducer from "./reducer.state";
import initialState from "./state.state";
const HackathonContext = createContext();


export function HackathonProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  const populateHackathons = (hackathons) => {
    dispatch({
      type: "ADD_HACKATHONS",
      payload: hackathons
    })
  }

  const populateContributers = (contributers) => {
    dispatch({
      type: "ADD_CONTRIBUTERS",
      payload: contributers
    })
  }

  return (
    <HackathonContext.Provider value={{
      state,
      dispatch,
      populateHackathons,
      populateContributers
    }}>{children}</HackathonContext.Provider>
  );
}

export function useHackathonContext(){
  return useContext(HackathonContext);
}
