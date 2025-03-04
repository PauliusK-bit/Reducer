import { useUsers } from "../pages/UsersPage/UsersPageContextProvider";
import { User } from "../pages/UsersPage/usersReducer";
import UsersItem from "./UserItem";

const UsersList = () => {
  const { users, error, loading } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user: User) => (
          <UsersItem key={user.id} user={user.name} id={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
