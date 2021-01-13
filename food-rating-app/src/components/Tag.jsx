import { Badge } from "@chakra-ui/react";
import React from "react";

function Tag({ tag }) {
  let color;

  switch (tag) {
    case "Vegan":
      color = "teal";
      break;
    case "GlutenFree":
      color = "blue";
      break;
    case "Spicy":
      color = "red";
      break;
    case "Meat":
      color = "green";
      break;
    case "GMOFree":
      color = "gray";
      break;
    case "Sugar":
      color = "pink";
      break;
    default:
      break;
  }
  return (
    <Badge
      borderRadius="full"
      objectFit="cover"
      px={4}
      py={1}
      my={2}
      mx={1}
      colorScheme={color}
    >
      {tag}
    </Badge>
  );
}

export default Tag;
