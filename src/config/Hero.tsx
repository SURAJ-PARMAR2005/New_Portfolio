/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import Leetcode from '@/components/svgs/Leetcode';
import CSS from '@/components/technologies/CSS';
import Canva from '@/components/technologies/Canva';
import Figma from '@/components/technologies/Figma';
import Fm from '@/components/technologies/Fm';
import NextJs from '@/components/technologies/NextJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ExpressJs from '@/components/technologies/ExpressJs';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Netlify from '@/components/technologies/Netlify';
import Cpp from '@/components/technologies/Cpp';
import Dsa from '@/components/technologies/Dsa';
import Redis from '@/components/technologies/Redis';
import Npm from '@/components/technologies/Npm';
import Render from '@/components/technologies/Render';

// Component mapping for skills
export const skillComponents = {
  ReactIcon: ReactIcon,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  ExpressJs: ExpressJs,
  NextJs: NextJs,
  TailwindCss: TailwindCss,
  Figma: Figma,
  CSS: CSS,
  FramerMotion: Fm,
  Canva: Canva,
  Html: Html,
  JavaScript: JavaScript,
  Netlify: Netlify,
  Cpp: Cpp,
  Dsa: Dsa,
  Redis: Redis,
  Npm: Npm,
  Render: Render,
};

export const heroConfig = {
  // Personal Information
  name: 'Suraj Parmar',
  title1: 'A Fullstack Developer.',
  title2: 'A Backend Developer.',
  title3: 'A Web Developer.',
  avatar: '/assets/logo-round.png',

  // Skills Configuration
  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: 'TailwindCss',
    },
    {
      name: 'Figma',
      href: 'https://www.figma.com/',
      component: 'Figma',
    },
    {
      name: 'Express.js',
      href: 'https://expressjs.com/',
      component: 'ExpressJs',
    },
    {
      name: 'HTML',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      component: 'Html',
    },
    {
      name: 'CSS',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      component: 'CSS',
    },
    {
      name: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      component: 'JavaScript',
    },
    {
      name: 'C++',
      href: 'https://isocpp.org/',
      component: 'Cpp',
    },
    {
      name: 'DSA',
      href: 'https://en.wikipedia.org/wiki/Data_structure',
      component: 'Dsa',
    },
    {
      name: 'Redis',
      href: 'https://redis.io/',
      component: 'Redis',
    },
    {
      name: 'npm',
      href: 'https://www.npmjs.com/',
      component: 'Npm',
    },
    {
      name: 'Render',
      href: 'https://render.com/',
      component: 'Render',
    },
    {
      name: 'Netlify',
      href: 'https://www.netlify.com/',
      component: 'Netlify',
    },
  ],

  // Description Configuration
  description: {
    template:
      "I build things for the web — fast, functional, and shipped. {skills:0} and {skills:4} on the front, {skills:1} and {skills:6} on the back, {skills:2} in the middle. I've built an AI-powered medical tool, a real-time IoT dashboard, and a few things in between. 235+ LeetCode problems deep, still going. 3rd year B.Tech student by day. Developer by choice. Looking for an internship where I can stop building alone and start building something that matters.",
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/SURAJ-PARMAR2005',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:surajparmar058@gmail.com',
    icon: <Mail />,
  },
  {
    name: 'Leetcode',
    href: 'https://leetcode.com/u/SURAJ_PARMAR/',
    icon: <Leetcode />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suraj-parmar-874464373/',
    icon: <LinkedIn />,
  },
];
