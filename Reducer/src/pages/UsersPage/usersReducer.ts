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
}

export type Action =
  | { type: ActionTypes.FETCH }
  | { type: ActionTypes.SUCCESS; payload: User[] }
  | { type: ActionTypes.FAIL; payload: string }
  | { type: ActionTypes.DELETE; payload: string };

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

    default:
      return state;
  }
};
