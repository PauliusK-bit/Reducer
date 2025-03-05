export interface Post {
  id: string;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  error: string;
  loading: boolean;
}

export enum PostActionTypes {
  FETCH = "fetch",
  SUCCESS = "success",
  FAIL = "fail",
  DELETE = "delete",
  ADD_POST = "addPost",
}

export type Action =
  | { type: PostActionTypes.FETCH }
  | { type: PostActionTypes.SUCCESS; payload: Post[] }
  | { type: PostActionTypes.FAIL; payload: string }
  | { type: PostActionTypes.DELETE; payload: string }
  | { type: PostActionTypes.ADD_POST; payload: Post };

export const PostInitialState: PostState = {
  posts: [],
  error: "",
  loading: false,
};

export const reducer = (state: PostState, action: Action): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case PostActionTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case PostActionTypes.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PostActionTypes.DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };

    case PostActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};
