import { IBadge, IDaoContainer, IInfoContainer } from "../../types";

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
