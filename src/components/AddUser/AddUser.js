import React, { useRef } from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const userName = useRef("");
  const skills = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("Hi Omar!");
    const userData = {
      userName: userName.current.value,
      skills: skills.current.value.split("/"),
    };
    if (userData.userName === "" || userData.skills === "") {
      return;
    }
    props.afterAddUser(userData);
    userName.current.value = "";
    skills.current.value = "";
  };

  return (
    <div className={styles["form"]}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            ref={userName}
            placeholder="your name"
          />
        </div>
        <div>
          <label htmlFor="skills">skills</label>
          <input
            id="skills"
            type="text"
            ref={skills}
            placeholder="separate skills using ' / '"
          />
        </div>
        <div>
          <button type="submit">Send User Data</button>
          <p>
            Note: <br />
            when adding username and skills, the data will send to Firebase :
            "https://normal-form-130f3-default-rtdb.firebaseio.com/usersData.json"
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
