import React, { useState } from "react";
import { foodPosts } from "../data/data";
import { users } from "../data/data";

import Posts from "./Posts";
import { useEffect } from "react";

const User = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(users.filter((user) => user.userName === match.params.user));
  }, [match]);

  console.log(user);

  return (
    <main>
      <h1>Welcome {user[0].name}</h1>
      <Posts data={foodPosts} user={user} />
    </main>
  );
};

export default User;
