export interface Product {
  href: string;
  id: string;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  companyName: string;
  companyWebsite: string;
  preferCompany?: string;
  introduction: string;
  preferdescription: string;
  inspiration:string;
  source:string;
  PreviewLink:string;
  downloadLink:string;
  careerLink:string;
  templateName:string;
}


export const products: Product[] = [
  {
    href: "/vault/1",
    id: "1",
    name: "Inspired by LayerZero: a design shaped for speed and clarity named - axis",
    price: "$0",
    imageSrc: "/oglogo.png",
    imageAlt: "Product 1",
    companyName: "LayerZero",
    companyWebsite: "https://layerzero.network",
    preferCompany:
      "layerZero is designed to address the challenges of cross-chain communication and interoperability.",
    introduction:
      "layerZero is an omnichain interoperability protocol that enables smart contracts to read from and write state to different blockchains. Developers can build omnichain applications (OApps) that can send state transitions, value transfers, and call smart contracts on other networks as if they were on a single blockchain. layerZero's design ensures that the core protocol contracts are immutable and non-upgradeable, ensuring your application continues to operate as expected indefinitely, while your contracts stay easily configurable and flexible to define each part of the protocol's message passing rails.",
      preferdescription: " Before LayerZero, users of blockchains were isolated per network, limiting the ability for decentralized applications (dApps) to share information, value, and composability. Message and value based bridges evolved from the necessity to reduce friction when moving state information between chains. Many early cross-chain solutions, however, relied on centralized services, a collection of fixed validators, or both to witness state transitions on a source blockchain before writing the corresponding updates on the destination network.When hundreds of dApps rely on the same small validator set, one compromise puts every contract at risk. Attacks on fixed validator set bridges have been responsible for over $2 billion dollars of user funds lost.LayerZero solves these problems by providing a secure, efficient, and user-friendly smart contract framework for building omnichain applications.",
      inspiration:" ✨ This template is inspired by LayerZero, a cross-chain communication protocol that&apos;s redefining blockchain interoperability. Their landing page stands out for its bold visual storytelling, minimalistic design, and investor-focused clarity. I rebuilt this template to capture that same balance of sleek branding and technical depth, so founders and indie hackers can ship fast while making a strong first impression — just like LayerZero does.",
      source:"https://layerzero.network",
      PreviewLink:"https://portfolio-v2-eosin-rho.vercel.app/",
      downloadLink:"https://github.com/AdityaSrivastava185/portfolio-v2/archive/refs/heads/main.zip",
      careerLink:"https://layerzero.network/careers" ,
      templateName:"axis"
  },
  {
    href: "/vault/2",
    id: "2",
    name: "Inspired by founder Benjamin Ian Chen , Founder @Boulevard Legacy LLC name - legacy",
    price: "$0",
    imageSrc: "/oglogo.png",
    imageAlt: "/oglogo.png",
    companyName: "Boulevard Legacy LLC",
    companyWebsite: "https://benjiianc.com/",
    introduction:"20 y/o born in Minnesota, studied in HK & Taiwan, currently in New York City B.A. in Economics & Mathematics & Business Studies @ New York University . Co-Founder @ Boulevard Legacy LLC & 80K users. Check our our progress here Founder @ The Branden Center, global research center focused on US-Asia relations Intern @ The Bailingguo News, nearly 1M subscribers and he also produce documentaries with 500k views ",
      preferdescription: "At Boulevard Legacy LLC , The Next Generation of Student Founders ship software products, build communities, and innovate.",
      inspiration:" ✨ This template is inspired by Benjamin Ian Chen, a 20-year-old founder from Minnesota who has already made a remarkable journey across Hong Kong,New York. Currently pursuing Economics, Mathematics, and Business Studies at New York University, Benjamin co-founded Boulevard Legacy LLC, a platform empowering the next generation of student founders to ship software products, build communities, and innovate. His work spans from leading The Branden Center, a global research initiative on US-Asia relations, to producing documentaries with over 500k views,.",
      source:"https://benjiianc.com/",
      PreviewLink:"https://portfolio-drop-v1.vercel.app/",
      downloadLink:"https://github.com/AdityaSrivastava185/Portfolio-drop-founder/archive/refs/heads/main.zip",
      careerLink:"https://www.boulevardlegacy.com/team",
      templateName:"legacy"
  },
];
