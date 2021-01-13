import React, { useState, Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { users } from "../data/data";

const LogIn = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(users);

  const signInHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userNameCheck = users.filter(
      (user) => user.userName === userDetails.userName
    );
    if (
      userNameCheck[0] &&
      userNameCheck[0].password === userDetails.password
    ) {
      setIsUser(true);
    }
  };

  useEffect(() => {
    if (isUser !== true) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  }, [isUser]);

  return (
    <form autoComplete="off" className="logInContainer">
      <div className="submitContainer">
        <label>Username</label>
        <input type="text" name="userName" onChange={signInHandler} required />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={signInHandler}
          required
        />
        <button onClick={submitHandler}>
          <Link
            className="link"
            to={(isUser && `/User/${user[0].userName}`) || "/"}
          >
            Log In
          </Link>
        </button>
      </div>
    </form>
  );
};

export default LogIn;
