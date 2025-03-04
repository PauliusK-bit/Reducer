import { useUsers } from "../pages/UsersPage/UsersPageContextProvider";

interface UserItemProps {
  user: string;
  id: string;
}

const UsersItem: React.FC<UserItemProps> = ({ user, id }) => {
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
      <span>{user}</span>
      <button
        onClick={() => deleteUser(id)}
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
