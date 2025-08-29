const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },

  {
    name: "Resume",
    link: "#resume",
  },
];

const words = [
  { text: "Ideas", imgPath: "src/assets/public/images/ideas.svg" },
  { text: "Concepts", imgPath: "src/assets/public/images/concepts.svg" },
  { text: "Designs", imgPath: "src/assets/public/images/designs.svg" },
  { text: "Code", imgPath: "src/assets/public/images/code.svg" },
  { text: "Ideas", imgPath: "src/assets/public/images/ideas.svg" },
  { text: "Concepts", imgPath: "src/assets/public/images/concepts.svg" },
  { text: "Designs", imgPath: "src/assets/public/images/designs.svg" },
  { text: "Code", imgPath: "src/assets/public/images/code.svg" },
 
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];
const abilities = [
  {
    imgPath: "/images/ownership.png",
    title: "Ownership and Responsibility",
    desc: "I take full ownership of every project I work on, ensuring alignment with the team and managing both quality and progress. From optimizing UI and SEO to tracking results, I focus on delivering tangible outcomes rather than just promises.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "I maintain a sharp attention to detail and ensure that every project meets high standards, optimizing both functionality and user experience for maximum impact.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "I am a strong communicator fluent in English, Hindi, and Marathi, capable of breaking down complex technical concepts into clear, easy-to-understand language. I ensure everyone involved understands the project, fosters collaboration, and keeps stakeholders informed with clarity and precision.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "I prioritize efficiency without compromising quality, making sure projects are completed on schedule while maintaining attention to detail and delivering measurable results.",
  },
];

//  add those small icons in techstack ... .animations ... 
const techStackImgs = [
  {
    name: "React / Next.js Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];


const expCards = [
{
  review: "Ashton brought creativity, technical expertise, and strong communication skills to the team. He was not only a reliable developer but also a friendly and helpful teammate who contributed across multiple projects. His ability to take full ownership, from planning to deployment, made him invaluable in delivering high-quality results on time.",
  imgPath: "/images/exp1.png",
  logoPath: "/images/logo1.png",
  title: "Software Developer Intern",
  date: "July 2025 - September 2025",
  responsibilities: [
    "Designed, developed, and maintained multiple full-stack projects covering both front-end and back-end development.",
    "Deployed applications on platforms like Hostinger and Vercel, ensuring stability and accessibility for end users.",
    "Gained hands-on experience with tools such as Google Cloud, Firebase, and Supabase to build scalable and efficient solutions.",
    "Worked across a wide variety of tech stacks and project types, adapting quickly to different requirements and challenges.",
    "Collaborated effectively with teammates, providing support, clear communication, and problem-solving to keep projects on track.",
  ],
}

  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Naitik Mehta",
    mentions: "@naitikmehta",
    review:
      "I can’t say enough good things about Ashton. .He is a very hardworking  and contributed a lot during our mini project where we worked on projects like Saathi(Find like minded people ) , SkillNest(Test conducter Saas platform) ,winit (get rewards for completing tasks... , environment friendly app ...) ,",
    imgPath: "/images/client1.png",
  },
  {
    name: "Pratik Biyani",
    mentions: "@pratikbiyani",
    review:
      "Working with Ashton was a fantastic experience. In our hackathon project (Museum chatbot based  ticketing  System ) he worked on the developing the mobile application for  the project. He was very helpful and helped us to develop the application. His attention to detail and commitment to quality are unmatched. Highly recommend him for any Type of  projects.",  
    imgPath: "/images/client3.png",
  },
  {
    name: "Abhinandan Basotra",
    mentions: "@abhinandanbasotra", 
    review:
      "Collaborating with Ashton was an absolute pleasure.We worked together on our hackathon project(Museum chatbot based ticketing System)  on developing the mobile application .His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Dhruv",
    mentions: "@Dhruv",
    review:
      "Ashton was a pleasure to work with. We were teammates in a frontend ui based hackathon.His contributions in making the website minimal, fast , adding 3d models , impressive animation really helped us. Not only skills but he is fun to work with  hears everyones idea and then collective makes the important desicion , he managed the project and took good ownership . Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Aaryan Lunis",
    mentions: "@aaryanlunis",
    review:"Ashton was a pleasure to work with. Together we worked on a data analytics project where we worked on Indian Premier League (IPL) data analysis , were he worked on visualizations and data analysis. He was very helpful and helped us to develop the application. His attention to detail and commitment to quality are unmatched. Highly recommend him for any Type of  projects.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Purab ",
    mentions: "@purab",
    review:
      "Ashton was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  
  {
    name: "github",
    imgPath: "/images/github.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};