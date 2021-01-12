// The dummy food posts are stored here
import veganBurger from "../assets/vegan-burger-jess.jpg";
import mildCurry from "../assets/curry-john.jpg";
import steak from "../assets/steak-sarah.jpg";

export const foodPosts = [
  {
    id: 0,
    userName: "Jess",
    img: veganBurger,
    name: "My Verious Vegan Burger!",
    title: "My Verious Vegan Burger!",
    des:
      "This vegan burger will blow your mind, it is a bit spicy so bare that in mind!",
    ingredients: ["1 garlic, 200g mushrooms, 1 lemon, 2 onions"],
    recipie: [
      "Mix eveything together in a bowl",
      "Bake it in the oven for 45mins",
    ],
  },
  {
    id: 1,
    userName: "John",
    img: mildCurry,
    name: "Johns Mild Curry",
    title: "Johns Mild Curry",
    des: "Here you go folks, mmmmm",
    ingredients: ["1 garlic, 200g mushrooms, 1 lemon, 2 onions"],
    recipie: [
      "Mix eveything together in a bowl",
      "Bake it in the oven for 45mins",
    ],
  },
  {
    id: 2,
    userName: "Sarah",
    img: steak,
    name: "Steak done right!!!",
    title: "Steak done right!!!",
    des:
      "I'm tired of people doing steak the wrong way, try this and never turn back",
    ingredients: ["1 garlic, 200g mushrooms, 1 lemon, 2 onions"],
    recipie: [
      "Mix eveything together in a bowl",
      "Bake it in the oven for 45mins",
    ],
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
