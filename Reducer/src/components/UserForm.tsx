import { useState } from "react";
import { useUsers } from "../pages/UsersPage/UsersPageContextProvider";

const UserForm: React.FC = () => {
  const [name, setName] = useState("");

  const { addUser } = useUsers();

  const nameHandler = (event) => setName(event.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      alert("Please fill in all fields.");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
    };

    console.log("New user", newUser);

    addUser(newUser);
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={nameHandler}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default UserForm;
