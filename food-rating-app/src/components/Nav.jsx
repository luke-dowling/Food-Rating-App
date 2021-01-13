import React from "react";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import favicon from "../assets/favicon.ico";

const Nav = () => {
  return (
    <Flex p="3">
      <Box p="2">
        <Heading size="md" color="red.600">
          <img
            alt="icon"
            src={favicon}
            height={36}
            width={36}
            style={{ display: "inline", paddingRight: "10px" }}
          />
          @CommunityChef
        </Heading>
      </Box>
      <Spacer />
      <Box p="2">
        <Link to="signup">
          <Button colorScheme="teal" mr="5">
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button colorScheme="teal" mr="2">
            Log in
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Nav;
