import React from "react";
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Flex p="3">
      <Box p="2">
        <Heading size="md" color="red.600">
          @CommunityChef
        </Heading>
      </Box>
      <Spacer />
      <Box>
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
