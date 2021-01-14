import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/config";
import { db } from "../../firebase/config";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await credentials.user.updateProfile({ displayName: firstName });

      await db
        .collection("users")
        .doc(credentials.user.uid)
        .set({ displayName: firstName });

      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };

  if (currentUser) {
    history.push("/user/" + firstName);
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
          <FormLabel className="form-label" htmlFor="name">
            Name
          </FormLabel>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            color="white"
            type="firstName"
            name="firstName"
            placeholder="Name"
          />
        </FormControl>
        <FormControl onSubmit={handleSubmit}>
          <FormLabel className="form-label" htmlFor="email">
            Email
          </FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color="white"
            type="email"
            name="email"
            placeholder="Email"
          />
        </FormControl>
        <FormControl py="4">
          <FormLabel className="form-label" htmlFor="password">
            Password
          </FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color="white"
            type="password"
            name="password"
            placeholder="Password"
          />
        </FormControl>
        <Flex borderTop="2px">
          <Button onClick={handleSubmit} px="6" mt={4} type="submit">
            <Link className="link" to="/">
              Submit
            </Link>
          </Button>
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
          <Button colorScheme="teal" px="6" mt={4}>
            <Link className="link" to="/login">
              Sign Up
            </Link>
          </Button>
        </Flex>
      </div>
    </form>
  );
};

export default SignUp;
