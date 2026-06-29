// import CSS from '@/components/technologies/CSS';
// import Canva from '@/components/technologies/Canva';
// import Figma from '@/components/technologies/Figma';
// import Html from '@/components/technologies/Html';
// import JavaScript from '@/components/technologies/JavaScript';
// import NextJs from '@/components/technologies/NextJs';
import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
// import SQL from '@/components/technologies/SQL';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

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
    isCurrent: false,
    company: 'SlashByte',
    position: 'Software Engineer Intern',
    location: 'Banglore (Remote)',
    image: '/assets/companies/SlashByte_logo.jpg',
    description: [
      'Revamped landing page with responsive HTML/CSS design and custom React components, reducing by loadtime 30% and improving engagement metrics.',
      'Implemented JavaScript-based A/B testing framework and integrated React hooks for dynamic UX features,feeding insights into data-driven UI refinements.',
    ],
    startDate: 'January 2025',
    endDate: 'March 2025',
    technologies: [
      {
        name: 'React.js',
        href: 'https://nestjs.com/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://www.mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    website: 'https://www.slashbyte.org/',
    linkedin:
      'https://www.linkedin.com/company/slashbyte%E2%84%A2/posts/?feedView=all',
  },
];
