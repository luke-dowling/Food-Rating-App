import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { users } from "../data/data";

const LogIn = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const [user, setUser] = useState([]);

  const signInHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userNameCheck = users.filter(
      (user) => user.userName === userDetails.userName
    );
    const userPasswordCheck = userNameCheck.filter(
      (user) => user.password === userDetails.password
    );
    userPasswordCheck.length === 1 && setUser(userPasswordCheck);
  };

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
            to={(user.length === 1 && `/User/${user[0].userName}`) || "/"}
          >
            Log In
          </Link>
        </button>
      </div>
    </form>
  );
};

export default LogIn;
