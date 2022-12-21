import {
  IAboutUs,
  IBadge,
  ICategories,
  IDaoContainer,
  IHeaderLink,
  IInfoContainer,
  IItem
} from "../../types";

export const badgeData: IBadge[] = [
  {
    id: 1,
    image: "./topDao.svg",
    text: "Top Dao"
  },
  {
    id: 2,
    image: "./protocolDao.svg",
    text: "Protocal Dao"
  },
  {
    id: 3,
    image: "./investmentDao.svg",
    text: "Investment Dao"
  },
  {
    id: 4,
    image: "./socialDao.svg",
    text: "Social Dao"
  }
];

export const hotDaoData: IDaoContainer[] = [
  {
    id: 1,
    appLogo: "./appDao.svg",
    description:
      "ApeCoin is an ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.",
    tags: ["Social", "Top 10 Trending DAO"],
    title: "Apecoin DAO"
  },
  {
    id: 2,
    appLogo: "./decentraland.svg",
    description:
      "ApeCoin is an ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.",
    tags: ["Investment", "Top 10 Trending DAO"],
    title: "Decentraland"
  },
  {
    id: 3,
    appLogo: "./ukraine.svg",
    description:
      "ApeCoin is an ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.",
    tags: ["Charity", "Fundraising"],
    title: "UkraineDAO"
  }
];

export const newDaoData: IDaoContainer[] = [
  {
    id: 1,
    appLogo: "./bitDao.svg",
    description:
      "ApeCoin is an ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.",
    tags: ["Investment", "Start Up"],
    title: "BitDAO"
  },
  {
    id: 2,
    appLogo: "./ukraine.svg",
    description:
      "ApeCoin is an ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.",
    tags: ["Charity", "Fundraising"],
    title: "UkraineDAO"
  },
  {
    id: 3,
    appLogo: "./appDao.svg",
    description:
      "ApeCoin is an ERC-20 governance and utility token used to empower a decentralized community building at the forefront of web3.",
    tags: ["Social", "Top 10 Trending DAO"],
    title: "Apecoin DAO"
  }
];

export const infoData: IInfoContainer[] = [
  {
    id: 1,
    image: "./join.svg",
    title: "Join",
    description:
      "First step to making making a meaningful contribution on a DAO it to joining OpenDAO"
  },
  {
    id: 2,
    image: "./learn.svg",
    title: "Learn",
    description:
      "After you join us, we are entitled to educate you on your journey of contributing"
  },
  {
    id: 3,
    image: "./contribute.svg",
    title: "Contribute",
    description:
      "We have done our part to walk you through the DAOverse, now it’s time to take the bold step"
  }
];

export const governAssets: string[] = [
  "Govern and make decisions about your assets here",
  "Propose new causes and discuss how your assets should run here.",
  "Have complete transparency and visibility over everything. Secure your Assets!"
];

export const gettingStartedData: string[] = [
  "What is a DAO?",
  "How do I register a new DAO?",
  "Do I need crypto to join or invest in a DAO?"
];

export const resourcesData: IItem[] = [
  { id: 1, name: "Knowledge base" },
  { id: 2, name: "Support" },
  { id: 3, name: "FAQ" },
  { id: 4, name: "Dictionary" }
];

export const footerData: IItem[] = [
  {
    id: 1,
    name: "Explore"
  },
  {
    id: 2,
    name: "Learn"
  },
  {
    id: 3,
    name: "About Us"
  },
  {
    id: 2,
    name: "Documentation"
  }
];

export const headerData: IHeaderLink[] = [
  { id: 1, name: "Explore", link: "/explore" },
  { id: 1, name: "Learn", link: "/glossary" },
  { id: 1, name: "About Us", link: "/aboutus" },
  { id: 1, name: "Documentation", link: "" }
];

export const aboutusData: IAboutUs[] = [
  {
    id: 1,
    title: "About Creators",
    firstText: "More on Temidayo",
    secondText: "More on Queennete"
  },
  {
    id: 1,
    title: "About OpenDAO",
    firstText: "Read Documentations",
    secondText: "Read Vision & Mission"
  }
];

export const detailedDao: IBadge[] = [
  {
    id: 1,
    image: "./proposals.svg",
    text: "Proposals"
  },
  {
    id: 2,
    image: "./news.svg",
    text: "News"
  },
  {
    id: 3,
    image: "./about.svg",
    text: "About"
  }
];

export const categoriesData: ICategories[] = [
  {
    id: 1,
    title: "All Proposals",
    subtitle: "View All Available Proposals",
    background: "#D9D9D9"
  },
  {
    id: 2,
    title: "Membership",
    subtitle: "Tributing capital and Requesting new shares to join the DAO",
    background: "#BBFF85"
  },
  {
    id: 3,
    title: "Funding",
    subtitle:
      "Requesting funds from the DAO to work on internal projects and improvements",
    background: "rgba(111, 250, 241, 0.5)"
  },
  {
    id: 4,
    title: "Token",
    subtitle: "Request to add support for a new ERC20 token",
    background: "#FFE587;"
  },
  {
    id: 5,
    title: "Trade",
    subtitle:
      "Request the DAO to swap one asset for another within the War Chest",
    background: "#BAA1FF"
  },
  {
    id: 6,
    title: "GuildKick",
    subtitle: "Request to forcibly remove another member through a votes",
    background: "#FF92DA"
  },
  {
    id: 7,
    title: "Minion",
    subtitle:
      "Execute an external contract function e.g. swapping assets in the DAO bank",
    background: "#FF8686"
  }
];

export const alphabetData = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
