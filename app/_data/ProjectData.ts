import SmartForm from "../../assets/smartform.png";
import PaisaPal from "../../assets/project1.png";
import EpicEats from "../../assets/epiceats.png";

export const ProjectData = [
  {
    name: "SmartFormAI",
    image: SmartForm,
    description:
      "An AI form builder , where AI will generate form based on the prompt and the form will be customizable and the by sharing the live link of the form responses of the forms can we downloaded by the creator.",
    stack: [
      "NextJs",
      "Prisma",
      "Postgres",
      "Typescript",
      "TailwindCSS",
      "turborepo",
      "Docker",
    ],
    preview: "https://smartform.adityakoyalkar.online/",
    code: "https://smartform.adityakoyalkar.online/",
  },
  {
    name: "EpicEats",
    image: EpicEats,
    description:
      "Food Ordering platform allows allows users to  order form there city with features for filtering orders by cuisine, price range.Restaurant owner dashboard for tracking orders , stripe integration for secure payments",
    stack: [
      "React",
      "react-query",
      "express",
      "Mongodb",
      "stripe",
      "TailwindCSS",
      "Typescript",
    ],
    preview: "https://epiceats-me33.onrender.com/",
    code: "https://github.com/KoyalkarAditya/EpicEats",
  },
  {
    name: "PaisaPal",
    image: PaisaPal,
    description:
      "PaisaPal is a banking application that allows users and merchants to transfer money to other users easily and efficiently. It also offers on-ramp and off-ramp functionalities for seamless bank integrations. ",
    stack: [
      "NextJs",
      "Prisma",
      "Postgres",
      "Typescript",
      "TailwindCSS",
      "gemini",
      "Docker",
    ],
    preview: "https://github.com/KoyalkarAditya/PaisaPal",
    code: "https://github.com/KoyalkarAditya/PaisaPal",
  },
];
