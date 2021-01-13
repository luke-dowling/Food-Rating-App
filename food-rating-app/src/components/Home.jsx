import React from "react";
import {
  Box,
  Image,
  Button,
  Text,
  Heading,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import communitCooking from "../assets/community-cooking.jpg";
import exampleImage from "../assets/example-user-content.png";
//import { Link } from "react-router-dom";
//import { AuthContext } from "./Auth";
//import { AuthProvider } from "./authentication/Auth";

import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <Container maxW="5xl">
        <Heading
          as="h1"
          my="10"
          bgGradient="linear(to-l,  #ff5555, #c81111)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Welcom to Community Chef
        </Heading>
        <SimpleGrid columns={2} spacing={10}>
          <Box position="relative" top="30%" left="-5%">
            <Heading mb="3" color="teal.400">
              The Idea
            </Heading>
            <Text>
              Join you local community in sharing food ideas, saving recipies
              and rating them to filter out your local cooking hero!
            </Text>
          </Box>

          <Image
            position="relative"
            left="-15%"
            m="5"
            src={communitCooking}
            alt={communitCooking}
            htmlHeight="250px"
            htmlWidth="500px"
            objectFit="cover"
            borderRadius="20px"
          />

          <Image
            position="relative"
            right="-15%"
            m="5"
            src={exampleImage}
            alt={exampleImage}
            htmlWidth="250px"
            objectFit="cover"
            borderRadius="20px"
          />
          <Box textAlign="right" position="relative" top="30%" left="-5%">
            <Heading mb="3" color="teal.400">
              How It Works
            </Heading>
            <Text>
              Simply add a meal and description, give away your secret recipe
              and vwahla... Your good to go!
            </Text>
          </Box>
        </SimpleGrid>
        <Box my="10" p="2" textAlign="center">
          <Heading mb="3" color="red.600">
            Ready Chef?
          </Heading>
          <Text px="3" mb="3">
            Click on the link to get started or sign in on the top right!
            Bonappetite
          </Text>
          <Link to="/signup">
            <Button px="6" colorScheme="teal">
              Join
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Home;

//<>
//      <h1>Home</h1>
//      {currentUser ? (
//        <p>
//          You are logged - <Link to="/dashboard">View Dashboard</Link>
//        </p>
//      ) : (
//        <p>
//          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
//        </p>
//      )}
//    </>
