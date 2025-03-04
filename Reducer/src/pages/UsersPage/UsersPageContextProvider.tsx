import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { ActionTypes, initialState, reducer, User } from "./usersReducer";
import axios from "axios";
import { toast } from "react-toastify";

interface UsersContextType {
  users: User[];
  loading: boolean;
  error: string;
  deleteUser: (id: string) => Promise<void>;
  addUser: (user: User) => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(
  undefined
);

export const UsersContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users, loading, error } = state;

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: ActionTypes.FETCH });

        const { data } = await axios.get<User[]>("http://localhost:3000/users");

        dispatch({ type: ActionTypes.SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: ActionTypes.FAIL, payload: error.message });
        console.log("Something went wrong");
      }
    };

    getData();
  }, []);

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      dispatch({ type: ActionTypes.DELETE, payload: id });
      toast.error("User was deleted");
    } catch {
      console.error("Failed to delete user");
    }
  };

  const addUser = async (newUser: User) => {
    try {
      const { data } = await axios.post("http://localhost:3000/users", newUser);
      dispatch({ type: ActionTypes.ADD_USER, payload: data });
      toast.success("User was created");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const ctxValue: UsersContextType = {
    users,
    loading,
    error,
    deleteUser,
    addUser,
  };

  return (
    <UsersContext.Provider value={ctxValue}>{children}</UsersContext.Provider>
  );
};

export const useUsers = () => {
  const ctx = useContext(UsersContext);

  if (!ctx) {
    throw new Error(
      "useUsers cannot be used outside the UsersPageContextProvider"
    );
  }

  return ctx;
};
