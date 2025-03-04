import { ToastContainer } from "react-toastify";
import UsersList from "../../components/UsersList";
import { UsersContextProvider } from "./UsersPageContextProvider";
import UserForm from "../../components/UserForm";

const UsersPage = () => {
  return (
    <UsersContextProvider>
      <ToastContainer />
      <div>
        <h1>Users</h1>
        <UserForm />
        <UsersList />
      </div>
    </UsersContextProvider>
  );
};

export default UsersPage;
