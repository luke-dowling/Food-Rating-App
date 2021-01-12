import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default Star;
