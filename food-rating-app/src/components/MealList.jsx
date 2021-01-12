import React from "react";
import { useMeals } from "../food-hook";
import Meal from "./Meal";

export default function MealList() {
  const { meals } = useMeals();

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <Meal key={meal.id} {...meal} />
      ))}
    </div>
  );
}
