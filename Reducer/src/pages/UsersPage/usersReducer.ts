export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface State {
  users: User[];
  error: string;
  loading: boolean;
}

export enum ActionTypes {
  FETCH = "fetch",
  SUCCESS = "success",
  FAIL = "fail",
  DELETE = "delete",
  ADD_USER = "addUser",
}

export type Action =
  | { type: ActionTypes.FETCH }
  | { type: ActionTypes.SUCCESS; payload: User[] }
  | { type: ActionTypes.FAIL; payload: string }
  | { type: ActionTypes.DELETE; payload: string }
  | { type: ActionTypes.ADD_USER; payload: User };

export const initialState: State = {
  users: [],
  error: "",
  loading: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case ActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ActionTypes.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ActionTypes.DELETE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case ActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};
