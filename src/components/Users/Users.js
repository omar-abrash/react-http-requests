import React, { useState, useEffect, useCallback } from "react";

import styles from "./Users.module.css";

const Users = () => {
  //   const [error, setNewError] = useState(null);
  const [usersArray, setNewUsersArray] = useState([]);
  //

  const getDataHandler = useCallback(async () => {
    setNewUsersArray([]);
    try {
      const response = await fetch(
        "https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json"
      );
      if (!response.ok) {
        throw new Error("some thing is Wrong!");
      }
      //   console.log(response);
      const data = await response.json();
      //   console.log(data);
      for (const key in data) {
        // console.log(key, data[key]);
        setNewUsersArray((prevSate) => [...prevSate, data[key]]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  //   console.log(usersArray);
  // useEffect hook
  useEffect(() => {
    getDataHandler();
  }, [getDataHandler]);

  return (
    <div className={styles.users}>
      <div>
        <p>
          Note: <br />
          the data which appear in this part is loading automatically, but if
          you adding new data from the first adding form, you must click to
          below button.
        </p>
        <button onClick={getDataHandler}>Get Data from Firebase</button>
      </div>
      <div>
        {usersArray.map((user) => (
          <div key={Math.random()}>
            <h3>{user.userName}</h3>

            <ul>
              {user.skills.map((skill) => (
                <li key={skill + Math.random()}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
