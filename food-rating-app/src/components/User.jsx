import React, { useState } from "react";

import { users } from "../data/data";

import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";

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
      <Heading style={{ textAlign: "center", color: "black" }} as="h1">
        Welcome {user[0] ? user[0].name : ""}
      </Heading>

      <MealList />
    </main>
  );
};

export default User;
