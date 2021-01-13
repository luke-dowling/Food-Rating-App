import React from "react";
import { useInput } from "../hooks/useInput";
import { useMeals } from "../food-hook";
import {
  Input,
  Container,
  Button,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
export default function AddMealForm() {
  const [mealProps, resetMealProps] = useInput({
    title: "",
    description: "",
    recipe: "",
    image: "",
  });

  const { addMeal } = useMeals();

  const submit = (e) => {
    e.preventDefault();
    addMeal(mealProps.value);
    console.log(mealProps.value.image);
    resetMealProps();
  };

  return (
    <Container>
      <Box borderWidth="1px" borderRadius="lg" px={4} py={4}>
        <form id="meal-form" onSubmit={submit}>
          <FormControl isRequired id="title">
            <FormLabel htmlFor="title">Meal title</FormLabel>{" "}
            <Input
              value={mealProps.value.title}
              onChange={mealProps.onChange}
              name="title"
              placeholder="meal title..."
            />
          </FormControl>
          <FormControl isRequired id="description">
            <FormLabel>Meal description</FormLabel>{" "}
            <Input
              isRequired
              value={mealProps.value.description}
              onChange={mealProps.onChange}
              name="description"
              placeholder="meal description..."
            />
          </FormControl>
          <FormControl isRequired id="recipe">
            <FormLabel htmlFor="recipe">Meal recipe</FormLabel>{" "}
            <Input
              errorBorderColor="red.300"
              value={mealProps.value.recipe}
              onChange={mealProps.onChange}
              name="recipe"
              placeholder="meal recipe..."
            />
          </FormControl>
          <FormControl isRequired id="image">
            <FormLabel>Meal image</FormLabel>{" "}
            <Input
              value={mealProps.value.image}
              onChange={mealProps.onChange}
              name="image"
              placeholder="meal image..."
            />
          </FormControl>
          <Button mt={4} type="submit" colorScheme="teal" size="sm">
            Add meal
          </Button>
        </form>
      </Box>
    </Container>
  );
}
/* https://picsum.photos/200 */
