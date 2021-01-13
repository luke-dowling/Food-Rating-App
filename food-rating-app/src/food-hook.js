import React, { createContext, useContext, useState } from "react";
import { FOODDATA } from "./data/data";
import { v4 } from "uuid";

const FoodContext = createContext();
export const useMeals = () => useContext(FoodContext);

export default function FoodProvider({ children }) {
  const [meals, setMeals] = useState(FOODDATA);

  const addMeal = ({ title, recipe, description, image }) => {
    const newMeals = [
      ...meals,
      { id: v4(), rating: 0, title, recipe, description, image },
    ];
    setMeals(newMeals);
  };

  const removeMeal = (id) => setMeals(meals.filter((meal) => meal.id !== id));

  const rateMeal = (id, rating) => {
    console.log("hhhello");
    const newMeals = meals.map((meal) => {
      if (meal.id === id) {
        meal = { ...meal, rating };
      }
      return meal;
    });
    setMeals(newMeals);
  };

  return (
    <FoodContext.Provider value={{ meals, rateMeal, removeMeal, addMeal }}>
      {children}
    </FoodContext.Provider>
  );
}
