import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";

import { useMeals } from "../food-hook";
import Meal from "./Meal";

export default function MealList() {
  const { meals } = useMeals();

  return (
    <Container maxW="5xl" centerConten>
      <SimpleGrid columns={2} spacingX="40px" spacingY="40px">
        {meals.map((meal) => (
          <Meal maxW="3xl" key={meal.id} {...meal} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
