import CSS from '@/components/technologies/CSS';
import Canva from '@/components/technologies/Canva';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import SQL from '@/components/technologies/SQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  Instagram?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'BigTopSocial',
    position: 'Web Developer Intern',
    location: 'Nagpur',
    image: '/company/BT.png',
    description: [
      'Designed, Developed, and Deployed the official website for BigtopSocials as a Web Developer Intern, delivering a responsive, high-performance user experience aligned with the brand’s digital strategy.',
      'Maintained and enhanced Nagpur Heights property listing platforms by implementing structured JSON data workflows for efficient content management.',
      'Created and optimized web assets, including images, graphics, and UI components, improving visual consistency and performance across digital platforms.',
      'Developed brand toolkits and social media creatives to strengthen visual identity, enhance marketing communication, and maintain cohesive branding across online channels.',
    ],
    startDate: 'December 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'Canva',
        href: 'https://vercel.com/',
        icon: <Canva />,
      },
    ],
    website: 'https://www.bigtopsocial.com/',
    github: 'https://github.com/NagpurHeightsOfficial/Official_Bigtopsocial',
  },
  {
    isCurrent: false,
    company: 'Lamp Hub',
    position: 'Front End Developer Intern',
    location: 'Nagpur (Remote)',
    image: '/company/LH.png',
    description: [
      'Remote web development internship at LampHub, gaining hands-on experience with HTML, CSS, Bootstrap, jQuery, and jQuery UI.',
      'Built responsive interfaces and interactive components to understand layout systems, styling workflows',
      'Developed the Quiz Mitra project,  is a web-based quiz management system that allows teachers to create and manage quizzes, register students, and view their scores, while students can log in using phone number and password to attempt quizzes online.',
      'Strengthened debugging, code structuring, and frontend best practices through project-based learning and iterative improvements.',
    ],
    startDate: 'January 2025',
    endDate: 'March 2025',
    technologies: [
      {
        name: 'HTML',
        href: 'https://nestjs.com/',
        icon: <Html />,
      },
      {
        name: 'JavaScript',
        href: 'https://www.postman.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Css',
        href: 'https://www.typescriptlang.org/',
        icon: <CSS />,
      },
      {
        name: 'SQL',
        href: 'https://expressjs.com/',
        icon: <SQL />,
      },
    ],
    website: 'https://lamphub.com/',
    linkedin: 'https://www.linkedin.com/company/lamp-hub/',
  },
];
