import SmartForm from "../../assets/smartform.png";
import PaisaPal from "../../assets/project1.png";
// import EpicEats from "../../assets/epiceats.png";
// import StayWise from "../../assets/staywise.png";
import TelegramMinize from "../../assets/telegram-monitizer.png";
export const ProjectData = [
  {
    name: "Pointmation",
    image: PaisaPal,
    video: "https://res.cloudinary.com/dae31fk75/video/upload/v1746977995/Manim_Video_-_Made_with_Clipchamp_1746976944994_zcwyfp.mp4",
    stack: ["NextJs", "Turborepo", "Postgres", "Typescript", "TailwindCSS", , "Prisma", "Docker", "SocketIO", "AI"],
    description: "Pointmation is a tool for creating mathematical video animations powered by Manim code using AI.",
    preview: "https://point-mation.vercel.app/",
    code: "https://github.com/Aditya-Koyalkar/PointMation",
  },

  {
    name: "TelegramMonitizer",
    image: TelegramMinize,
    stack: ["NextJs", "Hono", "Mongoose", "Typescript", "TailwindCSS", "BotAPI", "SocketIO"],
    description:
      "TelegramMonitizer automates the process of managing Telegram groups and onboarding the target audience. It uses a Telegram bot for moderation, user engagement, and analytics.",
    preview: "https://telegram-monitize.vercel.app/",
    code: "https://github.com/Aditya-Koyalkar/TelegramMonitize",
  },

  {
    name: "SmartFormAI",
    image: SmartForm,
    description: "SmartForm automates form creation, customization, and response filtering - all powered by AI in a single, seamless platform.",
    stack: ["NextJs", "Prisma", "Postgres", "Typescript", "TailwindCSS", "gemini"],
    preview: "https://smartform.adityakoyalkar.online/",
    code: "https://smartform.adityakoyalkar.online/",
  },
  // {
  //   name: "PaisaPal",
  //   image: PaisaPal,
  //   stack: ["NextJs", "Prisma", "Postgres", "Typescript", "TailwindCSS", "turborepo", "Docker", "CI/CD"],
  //   description:
  //     "PaisaPal enables fast and secure money transfers between friends and merchants ,all with a simple and intuitive interface. Designed to make transactions effortless,Paisapal combines speed and reliability with a sleek UI. It ensures seamless performance and security, making it the go-to app for managing your finances, splitting bills, and sending money in just a few taps.",
  //   preview: "https://paisapal.onrender.com/",
  //   code: "https://github.com/KoyalkarAditya/PaisaPal",
  // },
  // {
  //   name: "StayWise",
  //   image: StayWise,
  //   description:
  //     "StayWise is a full stack Hotel booking platform with hotel admin dashboard and has  secure payments with stripe also allows users to book hotels and manage their bookings.",
  //   stack: ["React", "mongodb", "mongoose", "Typescript", "TailwindCSS", "react-query", "express", "stripe"],
  //   preview: "https://staywise-4r35.onrender.com/",
  //   code: "https://github.com/KoyalkarAditya/StayWise",
  // },
  // {
  //   name: "EpicEats",
  //   image: EpicEats,
  //   description:
  //     "Food Ordering platform allows allows users to  order form there city with features for filtering orders by cuisine, price range.Restaurant owner dashboard for tracking orders , stripe integration for secure payments",
  //   stack: ["React", "react-query", "express", "Mongodb", "stripe", "TailwindCSS", "Typescript"],
  //   preview: "https://epiceats-me33.onrender.com/",
  //   code: "https://github.com/KoyalkarAditya/EpicEats",
  // },
];
