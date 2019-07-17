import {
  createContext,
  createElement,
  useReducer,
  useMemo,
  useContext
} from "react";
import identity from "lodash/fp/identity";

export default function createStore(reducer) {
  const StateContext = createContext();

  const useStateValue = (selector = identity) => {
    const [state, dispatch] = useContext(StateContext);
    return [selector(state), dispatch];
  };

  const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(
      reducer,
      reducer(undefined, { type: "@@INIT" })
    );
    const value = useMemo(() => [state, dispatch], [state]);

    return createElement(StateContext.Provider, { value }, children);
  };

  return [StateProvider, useStateValue];
}
