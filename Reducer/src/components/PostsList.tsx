import { usePosts } from "../pages/PostsPage/PostsPageContextProvider";
import { Post } from "../pages/PostsPage/postsReducer";
import PostItem from "./PostItem";

const PostsList = () => {
  const { posts, error, loading } = usePosts();

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts.map((post: Post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
