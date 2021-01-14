import React, { useContext } from "react";

import { Heading } from "@chakra-ui/react";

import MealList from "./MealList";
import UserNav from "./UserNav";
import { AuthContext } from "../firebase/context";

const User = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      <UserNav />
      <Heading style={{ textAlign: "center", color: "black" }} as="h1">
        Welcome {user && user.displayName}
      </Heading>

      <MealList />
    </main>
  );
};

export default User;
