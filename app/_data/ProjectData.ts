import SmartForm from "../../assets/smartform.png";
import PaisaPal from "../../assets/project1.png";
import EpicEats from "../../assets/epiceats.png";
import StayWise from "../../assets/staywise.png";

export const ProjectData = [
  {
    name: "SmartFormAI",
    image: SmartForm,
    description:
      "An AI form builder , where AI will generate form based on the prompt and the form will be customizable and the by sharing the live link of the form responses of the forms can we downloaded by the creator.",
    stack: ["NextJs", "Prisma", "Postgres", "Typescript", "TailwindCSS", "turborepo", "Docker"],
    preview: "https://smartform.adityakoyalkar.online/",
    code: "https://smartform.adityakoyalkar.online/",
  },
  {
    name: "EpicEats",
    image: EpicEats,
    description:
      "Food Ordering platform allows allows users to  order form there city with features for filtering orders by cuisine, price range.Restaurant owner dashboard for tracking orders , stripe integration for secure payments",
    stack: ["React", "react-query", "express", "Mongodb", "stripe", "TailwindCSS", "Typescript"],
    preview: "https://epiceats-me33.onrender.com/",
    code: "https://github.com/KoyalkarAditya/EpicEats",
  },
  {
    name: "StayWise",
    image: StayWise,
    description:
      "StayWise is a full stack Hotel booking platform with hotel admin dashboard and has  secure payments with stripe also allows users to book hotels and manage their bookings.",
    stack: ["React", "mongodb", "mongoose", "Typescript", "TailwindCSS", "react-query", "express", "stripe"],
    preview: "https://staywise-4r35.onrender.com/",
    code: "https://github.com/KoyalkarAditya/StayWise",
  },
  {
    name: "PaisaPal",
    image: PaisaPal,
    description:
      "PaisaPal enables fast and secure money transfers between friends and merchants ,all with a simple and intuitive interface. Designed to make transactions effortless, FlashPay combines speed and reliability with a sleek UI. It ensures seamless performance and security, making it the go-to app for managing your finances, splitting bills, and sending money in just a few taps.",
    stack: ["NextJs", "Prisma", "Postgres", "Typescript", "TailwindCSS", "gemini", "Docker"],
    preview: "https://paisapal.onrender.com/",
    code: "https://github.com/KoyalkarAditya/PaisaPal",
  },
];
