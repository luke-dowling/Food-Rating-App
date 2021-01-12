import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useMeals } from "../food-hook";
export default function Meal({
  title,
  name,
  userName,
  image,
  description,
  id,
  recipe,
  ingredients,
  rating,
}) {
  const { rateMeal, removeMeal } = useMeals();

  return (
    <section>
      <div className="meal-card">
        <h1>{title}</h1>
        <h3>{name}</h3>
        <h3>{userName}</h3>
        <button onClick={() => removeMeal(id)}>
          <FaTrash />
        </button>
        <div className="image-container">
          <img src={image} alt="meal" style={{ height: "150px" }} />
        </div>
        <StarRating selectedStars={rating} />
      </div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateMeal(id, rating)}
      />
    </section>
  );
}
