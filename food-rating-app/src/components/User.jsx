import React, { useState } from "react";
import { FOODDATA } from "../data/data";
import { users } from "../data/data";

import Posts from "./Posts";
import { useEffect } from "react";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";

const User = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(users.filter((user) => user.userName === match.params.user));
  }, [match.params.user]);

  return (
    <main>
      <h1>Welcome {user[0] ? user[0].name : ""}</h1>
      <AddMealForm />
      <MealList />
    </main>
  );
};

export default User;
