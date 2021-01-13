import React from "react";
import {
  Box,
  Image,
  Badge,
  Button,
  Text,
  Heading,
  useDisclosure,
  UnorderedList,
  OrderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useMeals } from "../food-hook";
const Meal = ({
  title,
  name,
  userName,
  image,
  description,
  id,
  recipe,
  ingredients,
  rating,
  tags,
}) => {
  const { rateMeal, removeMeal } = useMeals();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image boxSize="400px" objectFit="cover" src={image} alt="meal" />

      <Box p="6">
        <Box mt={1} lineHeight="tight" isTruncated>
          <Heading fontWeight="semibold" as="h4" size="md">
            {title}
          </Heading>
        </Box>

        <Box my={2}>"{description}"</Box>

        <Button onClick={onOpen}>{name}</Button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Heading as="h4" size="m" mb={2}>
                Ingredients
              </Heading>
              <UnorderedList p={3}>
                {ingredients.map((ingredient, i) => {
                  return <ListItem key={i}>{ingredient}</ListItem>;
                })}
              </UnorderedList>
              <Heading as="h4" size="m" my={2}>
                Recipe
              </Heading>
              <OrderedList p={3}>
                {recipe.map((instruction, i) => {
                  return <ListItem key={i}>{instruction}</ListItem>;
                })}
              </OrderedList>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3}>
                Export Recipe
              </Button>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box d="flex" mt="2" alignItems="center">
          <StarRating selectedStars={rating} />
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <StarRating
            selectedStars={rating}
            onRate={(rating) => rateMeal(id, rating)}
          />
        </Box>

        <Box d="flex" alignItems="baseline">
          {tags.map((tag, i) => {
            let color;
            tag === "Vegan" && (color = "teal");
            tag === "GlutenFree" && (color = "blue");
            return (
              <Badge
                key={i}
                borderRadius="full"
                objectFit="cover"
                px={3}
                my={2}
                colorScheme={color}
              >
                {" "}
                {tag}
              </Badge>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Meal;
