import { ToastContainer } from "react-toastify";
import UsersList from "../../components/UsersList";
import { UsersContextProvider } from "./UsersPageContextProvider";

const UsersPage = () => {
  return (
    <UsersContextProvider>
      <ToastContainer />
      <div>
        <UsersList />
      </div>
    </UsersContextProvider>
  );
};

export default UsersPage;
