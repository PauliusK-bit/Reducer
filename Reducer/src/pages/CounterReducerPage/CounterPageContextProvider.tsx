import { createContext, ReactNode, useContext, useReducer } from "react";
import { ActionTypes, initialState, reducer } from "./counterReducer";

type CounterPageContextType = {
  count: number;
  grades: number[];
  changeGrade: (num: number) => void;
  resetGrade: () => void;
  addGrade: () => void;
  removeGrade: (index: number) => void;
  removeAllGrades: () => void;
};

const CounterPageContext = createContext<CounterPageContextType | undefined>(
  undefined
);

type CounterPageContextProviderProps = {
  children: ReactNode;
};

export const CounterPageContextProvider: React.FC<
  CounterPageContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, grades } = state;

  const changeGrade = (num: number) =>
    dispatch({ type: ActionTypes.CHANGE, payload: num });
  const resetGrade = () => dispatch({ type: ActionTypes.RESET });
  const addGrade = () => dispatch({ type: ActionTypes.ADD_GRADE });
  const removeGrade = (index: number) =>
    dispatch({ type: ActionTypes.REMOVE_GRADE, payload: index });
  const removeAllGrades = () =>
    dispatch({ type: ActionTypes.REMOVE_ALL_GRADES });

  const ctxValue: CounterPageContextType = {
    count,
    grades,
    changeGrade,
    resetGrade,
    addGrade,
    removeGrade,
    removeAllGrades,
  };

  return (
    <CounterPageContext.Provider value={ctxValue}>
      {children}
    </CounterPageContext.Provider>
  );
};

export const useCounter = () => {
  const ctx = useContext(CounterPageContext);

  if (!ctx) {
    throw new Error(
      "useCounter cannot be used outside the CounterPageContextProvider"
    );
  }

  return ctx;
};
