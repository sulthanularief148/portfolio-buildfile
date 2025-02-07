import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  xerago,
  zealzoft,
  zealscreenshot,
  flipkart,
  effortz_logo,
  stratavision,
  ariefshopping,
  merxsea,
  hextech
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Databases",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Xerago",
    icon: xerago,
    iconBg: "#383E56",
    date: "Mar 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Xerago",
    icon: xerago,
    iconBg: "#383E56",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Zeal Zoft",
    icon: zealzoft,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Zeal Zoft",
    icon: zealzoft,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Effortz Solution",
    icon: effortz_logo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Worked with Centralized Monitoring System (CMS) project from February to May 2024, creating REST APIs using Java.",
      "Working with OTAR project from June 2024 to present, developing UI using Angular.",
    ],
  },
];

const projects = [
  {
    name: "ZealZoft Corporate Website",
    description:
      "I had the privilege of spearheading the development of ZealZoft's corporate website, a project that seamlessly blends innovation and aesthetics. Leveraging the power of React for a dynamic user interface and incorporating Three.js for immersive 3D graphics, the website stands as a testament to ZealZoft's commitment to cutting-edge technology.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: zealscreenshot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flipkart Clone",
    description:
      "The Flipkart clone project stands as a testament to my prowess in full-stack development, showcasing the meticulous implementation of an e-commerce platform akin to the popular Flipkart. Employing HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, I meticulously crafted an immersive and feature-rich online shopping experience.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: flipkart,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stratavision",
    description: `Developed the Stratavision company website, emphasizing their role as dedicated growth partners rather than just service providers. Created a dynamic and engaging online presence that aligns with Stratavision's mission to help clients chart the roadmap for their vision, utilizing modern web technologies to ensure a seamless, responsive, and user-friendly experience. (September 2023)`,
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: stratavision,
    source_code_link: "https://www.stratavision.in/",
  },
  {
    name: "E-commerce Shopping",
    description: `Developed the front end of an e-commerce shopping web app using React.js and Redux, focusing on dynamic user interfaces and state management, while implementing the back end with Sanity to manage content and ensure seamless integration. Designed and integrated features for an electronics shopping experience, including product listings for headphones and speakers, and implemented shopping cart functionality along with Stripe payment integration for secure transactions. (June 2023 – August 2023, Parangipettai, India)`,
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient"
      }
    ],
    image: ariefshopping,
    source_code_link: "https://ariefshopping.vercel.app/",
  },
  {
    name: "Merxsea - Oil and Gas",
    description: `Developed a dynamic website for Merxsea, an oil and gas company, to enhance its online presence and highlight its offerings through detailed service descriptions. Designed and implemented a project showcase to display completed and ongoing projects, integrating interactive elements to engage potential clients and improve user experience. Utilized React.js, Tailwind CSS, and Framer Motion for a modern and visually appealing design. (May 2023, Parangipettai, India)`,
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient"
      }
    ],
    image: merxsea,
    source_code_link: "https://merxsea.com/",
  },
  {
    name: " Hex Tech Ltd Company website",
    description: `Developed a modern and responsive website for Hex Tech Ltd, a mobile store specializing in the latest mobile devices and accessories, designed to provide an intuitive shopping experience for customers. Utilized React.js and Tailwind CSS to create a visually appealing and user-friendly interface.`,
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      }
    ],
    image: hextech,
    source_code_link: "https://hextechltd.com/",
  },
  {
    name: "Make my Trip Clone UI",
    description: `Developed a demo website for Make My Trip, focusing on the home page UI to showcase travel booking features and user interface design. Utilized React.js and Tailwind CSS to create a visually appealing and user-friendly layout.`,
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      }
    ],
    image: hextech,
    source_code_link: "https://makemytrip-demoproject.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
