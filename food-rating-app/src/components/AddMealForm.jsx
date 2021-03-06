import React, { useContext, useState } from "react";
import { useInput } from "../hooks/useInput";
import { useMeals } from "../food-hook";
import { useHistory } from "react-router-dom";
import {
  Input,
  Container,
  Button,
  FormControl,
  FormLabel,
  Box,
  CheckboxGroup,
  HStack,
  Checkbox,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";

import { db } from "../firebase/config";
import { AuthContext } from "../firebase/context";

export default function AddMealForm() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [mealProps, resetMealProps] = useInput({
    title: "",
    description: "",
    recipe: "",
    image: "",
    ingredients: "",
    tags: [],
  });

  const [tagsObj, setTagsObj] = useState({
    Vegan: false,
    GlutenFree: false,
    Spicy: false,
    Sugar: false,
    Meat: false,
    GMOFree: false,
  });

  const { addMeal } = useMeals();

  const handleCheckbox = (e) => {
    setTagsObj({ ...tagsObj, [e.target.value]: e.target.checked });
  };

  const submit = (e) => {
    e.preventDefault();
    for (const badge in tagsObj) {
      if (tagsObj[badge] === true) {
        mealProps.value.tags.push(badge);
      }
    }
    //Add a new meal to the collection
    db.collection("users")
      .doc(user.uid)
      .collection("meals")
      .add({ ...mealProps.value });
    history.goBack();
    resetMealProps();
    /* addMeal(mealProps.value);
     */
  };

  return (
    <Container maxW={"3xl"}>
      <Heading style={{ textAlign: "center" }} my={7}>
        Add a meal for the community
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" px={4} py={4}>
        <form id="meal-form" onSubmit={submit} autoComplete="off">
          <FormControl isRequired id="title" my={3}>
            <FormLabel htmlFor="title">Meal title</FormLabel>{" "}
            <Input
              value={mealProps.value.title}
              onChange={mealProps.onChange}
              name="title"
              placeholder="meal title..."
            />
          </FormControl>
          <FormControl isRequired id="description" my={3}>
            <FormLabel>Meal description</FormLabel>{" "}
            <Input
              value={mealProps.value.description}
              onChange={mealProps.onChange}
              name="description"
              placeholder="meal description..."
            />
          </FormControl>
          <FormControl isRequired id="recipe" my={3}>
            <FormLabel htmlFor="recipe">Meal recipe</FormLabel>{" "}
            <Input
              errorBorderColor="red.300"
              value={mealProps.value.recipe}
              onChange={mealProps.onChange}
              name="recipe"
              placeholder="meal recipe..."
            />
          </FormControl>
          <FormControl isRequired id="ingredients" my={3}>
            <FormLabel htmlFor="ingredients">Meal ingredients</FormLabel>{" "}
            <Input
              errorBorderColor="red.300"
              value={mealProps.value.ingredients}
              onChange={mealProps.onChange}
              name="ingredients"
              placeholder="meal ingredients..."
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
          <Box borderWidth="1px" borderRadius="lg" px={4} py={4} my={4}>
            <FormControl as="fieldset">
              <FormLabel as="legend">This meal is:</FormLabel>
              <CheckboxGroup colorScheme="green">
                <HStack>
                  <Checkbox
                    checked={tagsObj.Vegan}
                    onChange={handleCheckbox}
                    value="Vegan"
                  >
                    Vegan
                  </Checkbox>
                  <Checkbox
                    checked={tagsObj.GlutenFree}
                    value="GlutenFree"
                    onChange={handleCheckbox}
                  >
                    Gluten Free
                  </Checkbox>
                  <Checkbox
                    checked={tagsObj.Spicy}
                    value="Spicy"
                    onChange={handleCheckbox}
                  >
                    Spicy
                  </Checkbox>
                  <Checkbox
                    checked={tagsObj.Sugar}
                    value="Sugar"
                    onChange={handleCheckbox}
                  >
                    Sugar
                  </Checkbox>
                  <Checkbox
                    checked={tagsObj.GMOFree}
                    value="GMOFree"
                    onChange={handleCheckbox}
                  >
                    GMO Free
                  </Checkbox>
                  <Checkbox
                    checked={tagsObj.Meat}
                    value="Meat"
                    onChange={handleCheckbox}
                  >
                    Meat
                  </Checkbox>
                </HStack>
              </CheckboxGroup>
              <FormHelperText>Select all that apply.</FormHelperText>
            </FormControl>
          </Box>
          <Button mt={4} type="submit" colorScheme="teal" size="sm">
            Add meal
          </Button>
        </form>
      </Box>
    </Container>
  );
}
/* https://picsum.photos/200 */
