import { useUsers } from "../pages/UsersPage/UsersPageContextProvider";
import { User } from "../pages/UsersPage/usersReducer";
import UsersItem from "./UserItem";

const UsersList = () => {
  const { users, error, loading } = useUsers();
  console.log(users);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user: User) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
