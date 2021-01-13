import { FaStar } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
const Star = ({ selected = false, onSelect }) => (
  <IconButton
    onClick={onSelect}
    variant="outline"
    icon={<FaStar color={selected ? "red" : "grey"} />}
  />
);

export default Star;
