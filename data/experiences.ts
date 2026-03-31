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
  coverImages?: string[];
}

const experiences: Experience[] = [
  {
    title: "2nd ASEAN Cyber Shield (ACS) Online Education Bootcamp",
    organization: "Korea Internet & Security Agency (KISA) · AKCF",
    role: "Selected Representative — Myanmar",
    date: "Nov 18–21, 2025",
    location: "Lotte Hotel Busan / K-shield Training Center, Busan, Republic of Korea",
    description:
      "Officially invited and selected as the Myanmar representative to the 2nd ASEAN Cyber Shield Online Education Bootcamp — organized by KISA under the ASEAN-Korea Cooperation Fund (AKCF). The event brought together rising cybersecurity talent from across the ASEAN region for intensive training and networking.",
    highlights: [
      "Selected as Myanmar's representative from University of Computer Studies, Taunggyi",
      "4-day intensive cybersecurity bootcamp covering web exploitation, penetration testing, network security, and cryptography",
      "Networked with cybersecurity experts and practitioners from across the ASEAN region",
      "Full sponsorship: round-trip airfare, 5-night accommodation, and per diem provided by KISA/AKCF",
      "Represented Myanmar at the graduation ceremony wearing traditional attire and received the completion certificate",
      "Organized by ACS Secretariat in collaboration with ASEAN and the Government of ROK",
    ],
    tags: [
      "Cybersecurity",
      "ASEAN",
      "Penetration Testing",
      "Web Exploitation",
      "Cryptography",
      "Network Security",
      "KISA",
    ],
    type: "bootcamp",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Ah6hb6gkNkFQ0oiS8P78rzWMWyksW.png",
    coverImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Ah6hb6gkNkFQ0oiS8P78rzWMWyksW.png",
    ],
    link: "https://aseancybershield.org",
  },
  {
    title: "KBZPay Mini App Developers Bootcamp & Hackathon",
    organization: "KBZPay · AppCube (Powered by Huawei Technology)",
    role: "Participant — Developers Bootcamp with Hackathon",
    date: "2024",
    location: "Myanmar (Online)",
    description:
      "Participated in the KBZPay Mini Apps Developers Bootcamp & Hackathon — building functional mini apps with AppCube, a low-code platform powered by Huawei technology. Completed both Basic and Advanced levels, covering everything from UI Builder and Data Modeling to Custom Business Logic and KBZPay Payment Integration.",
    highlights: [
      "Completed AppCube Basic Level: Core Architecture, UI Builder, Workflow Designer & Data Modeling Tools",
      "Completed AppCube Advanced Level: Custom Business Logic, Advanced Workflow APIs, KBZPay AIS Payment Integration",
      "Deep focus on Reusability, Security, Performance and Scalability optimization for Mini Apps",
      "Built and delivered 1–4 mini app projects under online supervision from a professional AppCube instructor",
      "Mini Apps run natively inside KBZPay Super App on Android & iOS — no separate download needed",
      "Intensive program: 10 sessions (Basic) + 10 sessions (Advanced) + 10 practice sessions with projects",
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
    ],
    type: "hackathon",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xzZnjYnyJpVGd4wXIsaVXqPdAed8sI.png",
    coverImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xzZnjYnyJpVGd4wXIsaVXqPdAed8sI.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-POeflDckuhlGUsYhpgsl7uf1vJUPHW.png",
    ],
    link: "https://lnkd.in/gVvkh56x",
  },
];

export default experiences;
