import { Provider } from "react-redux";
import { store } from "./store.state";


export function HackathonProvider({ children }) {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
