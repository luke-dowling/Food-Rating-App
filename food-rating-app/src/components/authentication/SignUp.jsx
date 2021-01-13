import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../../firebase/config";

import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Spacer,
  Text,
  Link,
} from "@chakra-ui/react";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <form className="logInContainer">
      <div className="submitContainer">
        <Heading
          as="h1"
          my="5"
          color="teal.400"
          fontSize="4xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Create Your Account
        </Heading>
        <FormControl onSubmit={handleSubmit}>
          <FormLabel className="form-label" htmlFor="email">
            Email
          </FormLabel>
          <Input color="white" type="email" name="email" placeholder="Email" />
        </FormControl>
        <FormControl py="4">
          <FormLabel className="form-label" htmlFor="password">
            Password
          </FormLabel>
          <Input
            color="white"
            type="password"
            name="password"
            placeholder="Password"
          />
        </FormControl>
        <Flex borderTop="2px">
          <Link className="link" to="/">
            <Button px="6" mt={4} type="submit">
              Submit
            </Button>
          </Link>
          <Spacer />
          <Text
            mt="5"
            color="teal.400"
            fontSize="md"
            fontWeight="bold"
            textShadow="1px 0 1px #000000"
          >
            Already have an account?
          </Text>
          <Spacer />
          <Link className="link" to="/login">
            <Button colorScheme="teal" px="6" mt={4}>
              Log In
            </Button>
          </Link>
        </Flex>
      </div>
    </form>
  );
};

export default SignUp;
