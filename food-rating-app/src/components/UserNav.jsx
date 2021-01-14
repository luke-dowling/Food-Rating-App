import React from "react";
import firebase from "../firebase/config";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

import potIcon from "../assets/favicon.ico";

const UserNav = () => {
  const history = useHistory();
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("user signed out!");
        history.push("/");
      })
      .catch((error) => {
        console.error("En error has ocurred", error);
      });
  };

  return (
    <Flex p="3">
      <Box p="2">
        <Heading size="md" color="red.600" display="inline">
          <Link to="/">
            <IconButton
              variant="link"
              icon={
                <img
                  alt="icon"
                  src={potIcon}
                  width="36"
                  height="36"
                  style={{ display: "inline", paddingRight: "5px" }}
                />
              }
            />
          </Link>
          CommunityChef
        </Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Link to="/addMealForm">
          <Button colorScheme="teal" mr="5">
            Add Meal
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="teal" mr="2">
            Home
          </Button>
        </Link>
        <Button onClick={handleSignOut}>Sing out</Button>
      </Box>
    </Flex>
  );
};

export default UserNav;
