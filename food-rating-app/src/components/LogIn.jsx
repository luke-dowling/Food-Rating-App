import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { users } from "../data/data";
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
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(users);
  const [show, setShow] = React.useState(false);
  const [error, setError] = useState("");
  const handleClick = () => setShow(!show);

  const signInHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userNameCheck = users.filter(
      (user) => user.userName === userDetails.userName
    );
    console.log(userDetails.password);
    if (
      userNameCheck[0] &&
      userNameCheck[0].password === userDetails.password
    ) {
      setIsUser(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    if (isUser !== true) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  }, [isUser]);

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
        <FormControl isRequired id="userName">
          <FormLabel className="form-label">Username</FormLabel>
          <Input
            color="white"
            type="text"
            name="userName"
            placeholder="Your user name"
            onChange={signInHandler}
            required
          />
        </FormControl>
        <FormControl isRequired id="userName" py={4}>
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
          <Link
            className="link"
            to={(isUser && `/User/${user[0].userName}`) || "/"}
          >
            <Button px="6" mt={4} onClick={submitHandler}>
              Log In
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
            Haven't created an account yet?
          </Text>
          <Spacer />
          <Link className="link" to="/signup">
            <Button colorScheme="teal" px="6" mt={4}>
              Sign Up
            </Button>
          </Link>
        </Flex>
      </div>
    </form>
  );
};

export default LogIn;
