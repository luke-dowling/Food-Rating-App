import React, { useState } from "react";

import { users } from "../data/data";

import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import AddMealForm from "./AddMealForm";
import MealList from "./MealList";
import UserNav from "./UserNav";

const User = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(users.filter((user) => user.userName === match.params.user));
  }, [match.params.user]);

  return (
    <main>
      <UserNav />
      <Heading as="h1">Welcome {user[0] ? user[0].name : ""}</Heading>
      <AddMealForm />
      <MealList />
    </main>
  );
};

export default User;
