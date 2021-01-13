import React from "react";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import potIcon from "../assets/favicon.ico";

const UserNav = () => {
  return (
    <Flex p="3">
      <Box p="2">
        <Heading size="md" color="red.600" display="inline">
          <img
            alt="icon"
            src={potIcon}
            width="36"
            height="36"
            style={{ display: "inline", paddingRight: "5px" }}
          />
          CommunityChef
        </Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Link to="/">
          <Button colorScheme="teal" mr="5">
            Add Meal
          </Button>
        </Link>
        <Link to="/">
          <Button colorScheme="teal" mr="2">
            Home
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default UserNav;
