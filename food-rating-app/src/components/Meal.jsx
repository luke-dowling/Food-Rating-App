import React, { useState } from "react";
import {
  Box,
  Image,
  Button,
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
import StarRatingTotal from "./StarRatingTotal";
import Tag from "./Tag";
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

  const [userRating, setUserRating] = useState(0);

  const handleRate = (id, rate) => {
    setUserRating(rate);
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" my="4">
      <Box
        position="absolute"
        p="1"
        m="2"
        boxShadow="xs"
        rounded="md"
        bg="whitesmoke"
        cursor="pointer"
        onClick={() => removeMeal(id)}
      >
        <FaTrash color="red" />
      </Box>

      <Image boxSize="400px" objectFit="cover" src={image} alt="meal" />
      <Box p="6">
        <Box mt={1} lineHeight="tight" isTruncated>
          <Heading fontWeight="semibold" as="h4" size="md">
            {title}
          </Heading>
        </Box>

        <Box my={2} h={20}>
          "{description}"
        </Box>

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
          <StarRatingTotal selectedStars={rating} />
        </Box>

        <Box d="flex" alignItems="baseline">
          {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
        </Box>
        <Box borderTop="1px" borderColor="gray.200" my={2}>
          <Heading as="h4" size="m" my={2}>
            @{userName} : Rate here...
          </Heading>
          <Box d="flex" mt="2" alignItems="center">
            <StarRating
              selectedStars={userRating}
              onRate={(userRating) => handleRate(id, userRating)}
            />
            <Button onClick={() => rateMeal(id, userRating)}>Rate</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Meal;
