import { Box } from "@chakra-ui/react";
import Star from "./Star";

const createStarCount = (count) => [...Array(count)];

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      <Box pr={3}>
        <Box>
          {createStarCount(totalStars).map((n, i) => (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => onRate(i + 1)}
            />
          ))}
        </Box>
        {selectedStars} of {totalStars} stars
      </Box>
    </>
  );
}
