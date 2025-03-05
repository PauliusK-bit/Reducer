import { usePosts } from "../pages/PostsPage/PostsPageContextProvider";
import { Post } from "../pages/PostsPage/postsReducer";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { deletePost } = usePosts();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <p>
        <strong>Post title:</strong> {post.title}
      </p>
      <button
        onClick={() => deletePost(post.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default PostItem;
