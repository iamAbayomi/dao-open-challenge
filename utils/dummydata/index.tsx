import {
  IAboutUs,
  IBadge,
  ICategories,
  IDaoContainer,
  IGlossaryData,
  IGlossaryIndex,
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
  { id: 2, name: "Learn", link: "/glossary" },
  { id: 3, name: "About Us", link: "/aboutus" },
  { id: 4, name: "Documentation", link: "" }
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

export const glossaryData: IGlossaryIndex[] = [
  {
    index: "A",
    data: [
      {
        title: "Airdrop",
        tags: "(noun, verb)",
        description: `a marketing technique in which crypto projects send their native tokens directly to the wallets of their users in an effort to increase awareness and adoption.
    Alpha (noun)`
      },
      {
        title: "Alpha",
        tags: "(noun)",
        description: `valuable or insider information, usually regarding the value of digital assets like cryptocurrencies and NFTs; a measure of the return on an investment over and above the return offered by the market or other benchmark.`
      },
      {
        title: "Altcoin",
        tags: "(noun)",
        description: `initially used to refer to any cryptocurrency that wasn’t Bitcoin, altcoin may now refer to any new cryptocurrency with a relatively small market cap.`
      },

      {
        title: "ATH- All Time High",
        tags: "(noun)",
        description: `the highest price an asset has ever had.`
      },
      {
        title: "ATL- All Time Low",
        tags: "(noun)",
        description: `the lowest price an asset has ever had.`
      }
    ]
  },
  {
    index: "B",
    data: [
      {
        title: "Bear Market",
        tags: "(noun, verb)",
        description: `a prolonged period of decline in a financial market.`
      },
      {
        title: "Bearish",
        tags: "(adjective)",
        description: `similar to a bear market, this refers to holding a pessimistic view of a market or asset’s value. If you are bearish on a certain cryptocurrency, you believe its value will decrease over time. Those who are bearish may be referred to as bears, sometimes purposely misspelled as beras
        `
      },
      {
        title: "Bitcoin",
        tags: "(noun)",
        description: `the very first decentralized, peer-to-peer, digital currency, created by the pseudonymous Satoshi Nakamoto in 2009.
        `
      },
      {
        title: "Blockchain",
        tags: "(noun)",
        description: `a publicly-accessible digital ledger used to store and transfer information without the need for a central authority. Blockchains are the core technology on which cryptocurrency protocols like Bitcoin and Ethereum are built.
        `
      },
      {
        title: "Block Explorer",
        tags: "(noun)",
        description: `a tool for browsing information on a blockchain, such as transactions, wallet addresses, market caps, and hash rates.
        `
      },
      {
        title: "Burn",
        tags: "(verb)",
        description: `the process of removing tokens from a cryptocurrency’s circulating supply, usually done by sending them to an inaccessible wallet address. Other digital assets, such as NFTs, can also be burned via the same process. `
      }
    ]
  },
  {
    index: "C",
    data: [
      {
        title: "Centralized",
        tags: "(adjective)",
        description: `a hierarchical structure in which authority and control are concentrated within a small group of decision makers.
        `
      },
      {
        title: "CEX- Centralized Exchange",
        tags: "(noun)",
        description: `a cryptocurrency exchange managed by a centralized business or entity. i.e. Coinbase, Gemini, Kraken`
      },
      {
        title: "CeFi- Centralized Finance",
        tags: "(noun)",
        description: `centralized businesses that participate in crypto. I.e. BlockFi, DCG, Grayscale`
      },
      {
        title: "Coin",
        tags: "(noun)",
        description: `a cryptocurrency built on its own native blockchain, intended to be used as a store of value and medium of exchange within that ecosystem.  i.e. BTC, ETH`
      },
      {
        title: "Collateral",
        tags: "(noun)",
        description: `any asset accepted as security for a loan, such as a physical asset like real estate, or a digital asset like an NFT.`
      },
      {
        title: "Cold Wallet",
        tags: "(noun)",
        description: `an offline device used to store cryptocurrencies. Cold wallets can be hardware devices or simply sheets of paper containing a user’s private keys. Because cold wallets are not connected to the internet, they are generally a safer method of storing cryptocurrencies.
        See also: hot wallet (antonym)`
      },
      {
        title: "Consensus",
        tags: "(noun)",
        description: `the state of agreement amongst the nodes on a blockchain. Reaching consensus is necessary for new transactions to be verified and new blocks to be added to the blockchain.`
      },
      {
        title: "Cryptocurrency",
        tags: "(noun)",
        description: `a digital asset designed to be used as a medium of exchange. Cryptocurrencies are borderless, secure, and maintained by blockchains as opposed to centralized banks or governments.`
      }
    ]
  },
  {
    index: "D",
    data: [
      {
        title: "DAO- Decentralized Autonomous Organization",
        tags: "(noun)",
        description: `an organization based on open-source code and governed by its users. DAOs typically focus on a specific project or mission and trade the traditional hierarchical systems of legacy corporations for guidelines written on the blockchain. 
        `
      },
      {
        title: "Dapp- Decentralized Application",
        tags: "(noun)",
        description: `an application built on open-source code that lives on the blockchain. Dapps exist independent of centralized groups or figures and often incentivize users to maintain them through rewarded tokens.
        `
      },
      {
        title: "Decentralized",
        tags: "(adjective)",
        description: `a system that operates without the control of a central figure or authority, and replaces it with a distributed peer-to-peer network.
        `
      },
      {
        title: "Degen",
        tags: "(noun, adjective)",
        description: `initially short for “degenerate gambler.” While this still refers to individuals involved with risky bets, degen may also refer more broadly to anyone involved in crypto and financial spaces. Like with “ape,” this is generally a self-assigned term and does not carry a negative connotation. Degens are a proud people who enjoy ridiculous call options on GME, buying the dip before paying their rent, and occasionally aping into shitcoins. 
        `
      },
      {
        title: "DeFi- Decentralized Finance",
        tags: "(noun)",
        description: `the ecosystem of borderless, trustless, peer-to-peer financial tools being built on public blockchains without the use of banks. DeFi apps are built to be open and interconnected, allowing them to be used in conjunction with one another.
        `
      },
      {
        title: "DEX- Decentralized Exchange",
        tags: "(noun)",
        description: `a peer-to-peer cryptocurrency exchange built on the blockchain. A DEX is run by its users and smart contracts instead of an intermediary figure or centralized institution. 
        `
      },
      {
        title: "DYOR- Do Your Own Research ",
        tags: "",
        description: `similar to DD, this phrase is used to remind people to conduct their own investigation into an asset before investing in it. 
        `
      }
    ]
  },
  {
    index: "E",
    data: [
      {
        title: "EIP- Ethereum Improvement Proposal",
        tags: "(noun)",
        description: `a standard format for presenting a new feature or process to the Ethereum community.`
      },
      {
        title: "EIP- Ethereum Improvement Proposal",
        tags: "(noun)",
        description: `a standard format for presenting a new feature or process to the Ethereum community.`
      },
      {
        title: "ERC- Ethereum Request for Comments",
        tags: "(noun)",
        description: `the standard smart contract outline on which Ethereum-based smart contracts are built. `
      },
      {
        title: "ERC-20",
        tags: "(noun)",
        description: `the Ethereum token standard, providing a standardized smart contract structure for fungible tokens.`
      },
      {
        title: "ERC-721",
        tags: "(noun)",
        description: `an Ethereum token standard that allows for the formation of unique tokens, otherwise known as NFTs, or non-fungible tokens. Unlike the ERC-20 standard, ERC-721 tokens have specific properties that allow each to be uniquely identified and valued independently of one another.
        `
      },
      {
        title: "ERC-1155",
        tags: "(noun)",
        description: `an Ethereum token standard which allows for fungible, non-fungible, and semi-fungible tokens to be managed by a single smart contract simultaneously. These are commonly used in gaming and collectible trading to reduce the number of necessary transactions.`
      },
      {
        title: "Ethereum",
        tags: "(noun)",
        description: `a public blockchain serving as the foundation for decentralized applications. Ethereum is a turing complete language, allowing for users to write and deploy complex, self-executing smart contracts which live on the blockchain. `
      }
    ]
  },
  {
    index: "F",
    data: [
      {
        title: "Fiat",
        tags: "(noun)",
        description: `a currency established as legal tender, often backed and regulated by a government, such as the US Dollar. 
        `
      },
      {
        title: "Flippening",
        tags: "(noun)",
        description: `a reference to the possible event of Ethereum becoming more valuable than Bitcoin, in terms of market cap. DISCLAIMER: Please do not mention the flippening to Bitcoin maxis. They will not think it is funny, and they will proceed to explain why Ethereum is a shitcoin.`
      },
      {
        title: "FOMO- Fear Of Missing Out",
        tags: "(noun)",
        description: `a feeling of anxiety, stemming from missing out on an opportunity. In investing, this usually coincides with investors buying an asset after it has already seen a considerable increase in price, hoping to get in and out before a pullback occurs. This is known as “FOMOing in” or “aping in.`
      },
      {
        title: "Fork",
        tags: "(noun, verb)",
        description: `a change to a blockchain’s protocol. When these changes are minor, this results in a soft fork. When the changes are more fundamental, this may result in a hard fork, leading to the formation of a separate chain with different rules.`
      },
      {
        title: "FUD- Fear, Uncertainty, and Doubt",
        tags: "(noun)",
        description: `news around an asset that seems negative, but turns out to be false or blown out of proportion.`
      },
      {
        title: "Full Node",
        tags: "(noun)",
        description: `a blockchain node which stores the blockchain’s complete history, as well as verifies and relays transactions.`
      },
      {
        title: "Fungible",
        tags: "(adjective)",
        description: `interchangeable; exchangeable with something else of the same kind.`
      }
    ]
  }
];

export const personalGoalData: string[] = [
  "Networking",
  "Financial Investment",
  "Meme & Fun",
  "Knowledge",
  "Social Impact",
  "I Don’t Know"
];

export const interestData: string[] = [
  "NFTs",
  "Play 2 Earn",
  "Trading Crypto",
  "DeFi"
];

export const memberData: string[] = [
  "What is a DAO?",
  "Yes, I am",
  "No, I am not",
  "Not Sure"
];

const same: IGlossaryData[] = [
  {
    title: "",
    tags: "",
    description: ``
  },
  {
    title: "",
    tags: "",
    description: ``
  }
];

// const Title = () => {
//   return (
//     <>
//       {step == 1 ? (
//         <Text m={"51px 0px 120px"} fontSize={"38px"} fontWeight={"700"}>
//           What are your personal goal <br /> with
//           <Span>DAOs?</Span>
//         </Text>
//       ) : step == 2 ? (
//         "What are you most interested in?"
//       ) : (
//         "Are you currently a member of any DAOs?"
//       )}
//     </>
//   );
// };
