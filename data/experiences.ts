export interface Experience {
  title: string;
  organization: string;
  role: string;
  date: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  type: "competition" | "bootcamp" | "hackathon" | "work";
  image?: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    title: "2nd ASEAN Cyber Shield (ACS) Online Education Bootcamp",
    organization: "Korea Internet & Security Agency (KISA)",
    role: "Selected Representative — Myanmar",
    date: "Nov 18–21, 2025",
    location: "Lotte Hotel Busan / K-shield Training Center, Busan, Republic of Korea",
    description:
      "Officially selected and invited as a representative of Myanmar to participate in the 2nd ASEAN Cyber Shield Online Education Bootcamp, organized by KISA under the ASEAN-Korea Cooperation Fund (AKCF). The event focused on strengthening cybersecurity capabilities across the ASEAN region.",
    highlights: [
      "Officially selected as Myanmar representative from University of Computer Studies, Taunggyi",
      "Intensive 4-day cybersecurity training covering web exploitation, pentesting, and cryptography",
      "Networked with cybersecurity experts and rising talent from across the ASEAN region",
      "All attendance costs covered — round-trip airfare, accommodations (5 nights), and per diem",
      "Received certificate while representing the nation in traditional attire at graduation ceremony",
    ],
    tags: [
      "Cybersecurity",
      "ASEAN",
      "Web Exploitation",
      "Penetration Testing",
      "Cryptography",
      "Network Security",
      "Bug Bounty",
    ],
    type: "bootcamp",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Ah6hb6gkNkFQ0oiS8P78rzWMWyksW.png",
    link: "https://aseancybershield.org",
  },
  {
    title: "KBZPay Mini App Developers Bootcamp & Hackathon",
    organization: "KBZPay",
    role: "Participant — Developers Bootcamp with Hackathon",
    date: "2024",
    location: "Myanmar (Online)",
    description:
      "Participated in the KBZPay Mini Apps Developers Bootcamp & Hackathon program, building functional mini apps using AppCube — a low-code platform powered by Huawei technology. Completed both Basic and Advanced levels, covering everything from UI Builder and Data Modeling to Custom Business Logic and Payment Integration.",
    highlights: [
      "Completed AppCube Basic Level: Core Architecture, UI Builder, Workflow Designer, and Data Modeling Tools to build functional Mini Apps",
      "Completed AppCube Advanced Level: Custom Business Logic, Advanced Workflow APIs, KBZPay Payment Integration (AIS APIs)",
      "Deep focus on Reusability, Security, Performance, and Scalability optimization for Mini Apps",
      "Built and delivered 1–4 mini app projects across the program with online supervision",
      "Attended live online sessions with a professional AppCube instructor and project supervisor",
      "Mini Apps run inside the KBZPay Super App on Android & iOS without additional downloads",
    ],
    tags: [
      "AppCube",
      "Huawei",
      "KBZPay",
      "Mini App",
      "Low-Code",
      "Payment Integration",
      "Hackathon",
      "UI Builder",
      "Workflow",
    ],
    type: "hackathon",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xzZnjYnyJpVGd4wXIsaVXqPdAed8sI.png",
    link: "https://lnkd.in/gVvkh56x",
  },
];

export default experiences;
