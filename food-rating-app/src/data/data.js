// The dummy food posts are stored here
import veganBurger from "../assets/vegan-burger-jess.jpg";
import mildCurry from "../assets/curry-john.jpg";
import steak from "../assets/steak-sarah.jpg";

export const FOODDATA = [
  {
    id: 0,
    userName: "Jess",
    image: veganBurger,
    name: "My Verious Vegan Burger!",
    title: "My Verious Vegan Burger!",
    description:
      "This vegan burger will blow your mind, it is a bit spicy so bare that in mind!",
    ingredients: ["1 garlic", "200g mushrooms", "1 lemon", "2 onions"],
    recipe: [
      "Mix eveything together in a bowl",
      "Bake it in the oven for 45mins",
    ],
    rating: 3,
    tags: ["Vegan"],
  },
  {
    id: 1,
    userName: "John",
    image: mildCurry,
    name: "Johns Mild Curry",
    title: "Johns Mild Curry",
    description: "Here you go folks, mmmmm",
    ingredients: ["1 garlic", "200g mushrooms", "1 lemon", "2 onions"],
    recipe: [
      "Mix eveything together in a bowl",
      "Bake it in the oven for 45mins",
    ],
    rating: 4,
    tags: [],
  },
  {
    id: 2,
    userName: "Sarah",
    image: steak,
    name: "Steak done right!!!",
    title: "Steak done right!!!",
    description:
      "I'm tired of people doing steak the wrong way, try this and never turn back",
    ingredients: ["1 garlic", "200g mushrooms", "1 lemon", "2 onions"],
    recipe: [
      "Mix eveything together in a bowl",
      "Bake it in the oven for 45mins",
    ],
    rating: 1.4,
    tags: ["GlutenFree"],
  },
];

export const users = [
  { id: 0, name: "User1", userName: "luke&adrian", password: "l&a" },
  {
    id: 1,
    name: "User2",
    userName: "blank",
    password: "blank",
  },
];
