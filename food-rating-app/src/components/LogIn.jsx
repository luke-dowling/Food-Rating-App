import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import firebase from "../firebase/config";
import ErrorMessage from "./ErrorMessage";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Heading,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

const LogIn = () => {
  /*  const [currentUser, setCurrentUser] = useState(null); */
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = React.useState(false);
  const [error, setError] = useState("");

  const history = useHistory();
  const handleClick = () => setShow(!show);

  const signInHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = await firebase
        .auth()
        .signInWithEmailAndPassword(userDetails.email, userDetails.password);

      const displayName = credentials.user.displayName;
      history.push("/user/" + displayName);
      /*  setCurrentUser(true); */
    } catch (error) {
      console.log(error);

      setError(error);
    }
  };

  return (
    <form className="logInContainer">
      <div className="submitContainer">
        {error && <ErrorMessage message={error} />}
        <Heading
          as="h1"
          my="5"
          color="teal.400"
          fontSize="4xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Enter Your LogIn Details
        </Heading>
        <FormControl isRequired id="email">
          <FormLabel className="form-label">email</FormLabel>
          <Input
            color="white"
            type="text"
            name="email"
            placeholder="Your user name"
            onChange={signInHandler}
            required
          />
        </FormControl>
        <FormControl isRequired id="password" py={4}>
          <FormLabel className="form-label">Password</FormLabel>
          <InputGroup size="md">
            <Input
              color="white"
              pr="4.5rem"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={signInHandler}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex borderTop="2px">
          <Button px="6" mt={4} onClick={handleSubmit}>
            Log In
          </Button>
          <Spacer />
          <Text
            mt="5"
            color="teal.400"
            fontSize="md"
            fontWeight="bold"
            textShadow="1px 0 1px #000000"
          >
            Haven't created an account yet?
          </Text>
          <Spacer />
          <Button colorScheme="teal" px="6" mt={4}>
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </Button>
        </Flex>
      </div>
    </form>
  );
};

export default LogIn;
