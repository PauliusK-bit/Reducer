import { useUsers } from "../pages/UsersPage/UsersPageContextProvider";
import { User } from "../pages/UsersPage/usersReducer";

interface UserItemProps {
  user: User;
}

const UsersItem: React.FC<UserItemProps> = ({ user }) => {
  const { deleteUser } = useUsers();

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
      <p>{user.name}</p>
      <button
        onClick={() => deleteUser(user.id)}
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

export default UsersItem;
