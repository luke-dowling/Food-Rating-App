import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import { useMeals } from "../food-hook";
import Meal from "./Meal";

export default function MealList() {
  const { meals } = useMeals();

  return (
    <div className="meals-grid">
      <SimpleGrid
        maxW="7xl"
        minChildWidth="320px"
        spacingX="40px"
        spacingY="40px"
      >
        {meals.map((meal) => (
          <Meal maxW="3xl" key={meal.id} {...meal} />
        ))}
      </SimpleGrid>
    </div>
  );
}
