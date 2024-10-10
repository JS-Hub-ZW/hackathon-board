import React from "react";
import { Provider, Provider as ReduxProvider } from "react-redux";
import { store } from "./store.state";

interface HackathonProviderProps {
  children: React.ReactNode;
}

export function HackathonProvider({ children }: HackathonProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
