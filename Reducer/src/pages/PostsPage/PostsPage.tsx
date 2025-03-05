import { ToastContainer } from "react-toastify";
import { PostsPageContextProvider } from "./PostsPageContextProvider";
import PostsList from "../../components/PostsList";

const PostsPage = () => {
  return (
    <PostsPageContextProvider>
      <ToastContainer />
      <div>
        <h1>Posts</h1>
        <PostsList />
      </div>
    </PostsPageContextProvider>
  );
};

export default PostsPage;
