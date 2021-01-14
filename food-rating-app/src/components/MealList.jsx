import React, { useContext, useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";

import Meal from "./Meal";
import { db } from "../firebase/config";
import { AuthContext } from "../firebase/context";

export default function MealList() {
  const { user } = useContext(AuthContext);

  const [meals1, setMeals1] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let newArray = [];
      if (user) {
        await db
          .collection("users")
          .doc(user.uid)
          .collection("meals")
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.forEach((doc) => {
              newArray.push({ data: doc.data(), mealId: doc.id });
            });
          });
      }
      setMeals1(newArray);
    }
    fetchData();
  }, [user]);

  const removeMeal = (mealId) => {
    const newMeals = meals1.filter((meal) => meal.mealId !== mealId);
    setMeals1(newMeals);
  };

  console.log(meals1);
  return (
    <div className="meals-grid">
      <SimpleGrid
        maxW="7xl"
        minChildWidth="320px"
        spacingX="40px"
        spacingY="40px"
      >
        {meals1.map((meal) => (
          <Meal
            maxW="3xl"
            key={meal.mealId}
            {...meal}
            mealId={meal.mealId}
            removeMeal={removeMeal}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}
