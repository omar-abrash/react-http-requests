import React from "react";

import AddUser from "./components/AddUser/AddUser";
import Users from "./components/Users/Users";

function App() {
  const addUserHandler = async (newUser) => {
    // console.log("In App!", newUser);

    await fetch(
      "https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <React.Fragment>
      <AddUser afterAddUser={addUserHandler} />
      <Users />
    </React.Fragment>
  );
}

export default App;
