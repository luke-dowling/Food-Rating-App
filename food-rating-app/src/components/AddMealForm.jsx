import React from "react";
import { useInput } from "../hooks/useInput";
import { useMeals } from "../food-hook";

export default function AddMealForm() {
  const [mealProps, resetMealProps] = useInput({
    title: "",
    description: "",
    recipe: "",
  });

  const { addMeal } = useMeals();

  const submit = (e) => {
    e.preventDefault();

    addMeal(mealProps.value);
    resetMealProps();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="title">Meal title</label>{" "}
        <input
          value={mealProps.value.title}
          onChange={mealProps.onChange}
          name="title"
          placeholder="meal title..."
        />
      </div>
      <div>
        <label htmlFor="description">Meal description</label>{" "}
        <input
          value={mealProps.value.description}
          onChange={mealProps.onChange}
          name="description"
          placeholder="meal description..."
        />
      </div>
      <div>
        <label htmlFor="recipe">Meal recipe</label>{" "}
        <input
          value={mealProps.value.recipe}
          onChange={mealProps.onChange}
          name="recipe"
          placeholder="meal recipe..."
        />
      </div>
      <button>Add meal</button>
    </form>
  );
}
