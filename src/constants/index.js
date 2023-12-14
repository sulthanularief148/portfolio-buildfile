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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  xerago,
  zealzoft,
  zealscreenshot,
  tindog,
  flipkart,
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
    name: "figma",
    icon: figma,
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
    date: "Mar 2022 - sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "xerago",
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
    company_name: "Zeal zoft",
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
    title: "Full stack Developer",
    company_name: "Zeal zoft",
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
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ZealZoft Corporate Website",
    description:
      "I had the privilege of spearheading the development of ZealZoft's corporate website, a project that seamlessly blends innovation and aesthetics. Leveraging the power of React for a dynamic user interface and incorporating Three.js for immersive 3D graphics, the website stands as a testament to ZealZoft's commitment to cutting-edge technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zealscreenshot,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Tindog - Tinder for Dogs",
  //   description:
  //     "Tindog, a whimsical and innovative project, brings the concept of dating apps to the canine world. As the sole developer behind this endeavor, I utilized a stack of HTML, CSS, Bootstrap, and jQuery to create a visually appealing and interactive platform for dogs and their owners.",
  //   tags: [
  //     {
  //       name: "HTML,CSS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Javascript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Jquery",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tindog,
  //   source_code_link: "https://github.com/",
  // },
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flipkart,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
