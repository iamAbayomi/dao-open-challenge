import {
  IBadge,
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
  { id: 1, name: "Learn", link: "" },
  { id: 1, name: "About Us", link: "" },
  { id: 1, name: "Documentation", link: "" }
];
