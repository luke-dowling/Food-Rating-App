import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useMeals } from "../food-hook";
import { Heading, IconButton } from "@chakra-ui/react";
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
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <h3>{name}</h3>
        <h3>{userName}</h3>
        <IconButton onClick={() => removeMeal(id)} icon={<FaTrash />} />

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
