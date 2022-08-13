import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export const footerContent = [
  {
    title: "SlashShopMap",
    subtitles: [
      {
        text: "aboutUs",
        href: "/about",
      },
      {
        text: "contactUs",
        href: "/blank",
      },
      {
        text: "saleInSlashShop",
        href: "/blank",
      },
      {
        text: "careerOpportunities",
        href: "/blank",
      },
    ],
  },
  {
    title: "customerServices",
    subtitles: [
      {
        text: "commonQuestions",
        href: "/blank",
      },
      {
        text: "returnProcedures",
        href: "/blank",
      },
      {
        text: "privacy",
        href: "/blank",
      },
    ],
  },
  {
    title: "shoppingGuide",
    subtitles: [
      {
        text: "howToPlaceAnOrder",
        href: "/blank",
      },
      {
        text: "orderSubmissionProcedure",
        href: "/blank",
      },
      {
        text: "paymentMethods",
        href: "/blank",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: AiFillInstagram,
    href: "/",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    href: "/",
  },
  {
    name: "twitter",
    icon: FaTwitterSquare,
    href: "/",
  },
  {
    name: "github",
    icon: AiOutlineGithub,
    href: "https://github.com/Amad3eu/",
  },
];
