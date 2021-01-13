import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Text } from "@chakra-ui/react";
const createStarCount = (count) => [...Array(count)];

const StarRatingTotal = ({ totalStars = 5, selectedStars = 0 }) => {
  return (
    <>
      {createStarCount(totalStars).map((star, i) => {
        let completeStars = Math.round(selectedStars);
        if (completeStars > i) {
          return <IoMdStar color={"red"} key={i} />;
        } else if (i + 1 - selectedStars > 0 && i + 1 - selectedStars < 1) {
          return <IoMdStarHalf color={"red"} key={i} />;
        }
        return <IoMdStar color={"grey"} key={i} />;
      })}
      <Text fontSize="xs">
        ({selectedStars} of {totalStars} stars)
      </Text>
    </>
  );
};

export default StarRatingTotal;
/* selectedStars > i && selectedStars < i + 1 */
