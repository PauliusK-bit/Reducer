import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  Post,
  PostActionTypes,
  PostInitialState,
  reducer,
} from "./postsReducer";
import axios from "axios";
import { toast } from "react-toastify";

interface PostsContextType {
  posts: Post[];
  loading: boolean;
  error: string;
  deletePost: (id: string) => Promise<void>;
  addPost: (post: Post) => void;
}

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined
);

export const PostsPageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, PostInitialState);

  const { posts, loading, error } = state;

  useEffect(() => {
    const getPostsData = async () => {
      try {
        dispatch({ type: PostActionTypes.FETCH });

        const { data } = await axios.get<Post[]>("http://localhost:3000/posts");

        dispatch({ type: PostActionTypes.SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: PostActionTypes.FAIL, payload: error.message });
        console.log("Something went wrong");
      }
    };

    getPostsData();
  }, []);

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      dispatch({ type: PostActionTypes.DELETE, payload: id });
      toast.error("User was deleted");
    } catch {
      console.error("Failed to delete user");
    }
  };

  const addPost = async (newPost: Post) => {
    try {
      const { data } = await axios.post("http://localhost:3000/users", newPost);
      dispatch({ type: PostActionTypes.ADD_POST, payload: data });
      toast.success("User was created");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const ctxValue: PostsContextType = {
    posts,
    loading,
    error,
    addPost,
    deletePost,
  };

  return (
    <PostsContext.Provider value={ctxValue}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const ctx = useContext(PostsContext);
  if (!ctx) {
    throw new Error(
      "usePosts cannot be used outside the PostsPageContextProvider"
    );
  }

  return ctx;
};
