import ReactIcon from '@/components/technologies/ReactIcon';
import NodeJs from '@/components/technologies/NodeJs';
import MongoDB from '@/components/technologies/MongoDB';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import TypeScript from '@/components/technologies/TypeScript';
import TailwindCss from '@/components/technologies/TailwindCss';
import Code from '@/components/svgs/Code';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Food Delivery Website',
    description: 'A full-stack food delivery platform with an integrated ordering system.',
    image: '/project/food-delivery.png',
    video: '/project/FOOD_DEL_VIDEO.mp4',
    link: 'https://food-del-frontend-cngi.onrender.com/',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="node" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongo" /> },
    ],
    github: 'https://github.com/SURAJ-PARMAR2005/food_delivery_website',
    live: 'https://food-del-frontend-cngi.onrender.com/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Smart Classroom Monitoring System',
    description: 'An IoT-based classroom monitoring dashboard bringing real-time statistics.',
    image: '/project/smart-classroom.png',
    video: '/project/Smart_classRoom_video.mp4',
    link: 'https://smart-classroom-k973.onrender.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'Node.js', icon: <NodeJs key="node" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'Supabase', icon: <Code key="supa" /> },
      { name: 'ESP32', icon: <Code key="esp" /> },
    ],
    github: 'https://github.com/SURAJ-PARMAR2005/Smart_ClassRoom',
    live: 'https://smart-classroom-k973.onrender.com/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Solo Leveling Habit Tracker',
    description: 'Gamified habit tracker inspired by Solo Leveling to boost daily productivity.',
    image: '/project/habit-tracker.png',
    video: '/project/SOLO_LEVELLING_VIDEO.mp4',
    link: 'https://habbit-tracker-1-bmuo.onrender.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="node" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongo" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'JWT', icon: <Code key="jwt" /> },
    ],
    github: 'https://github.com/SURAJ-PARMAR2005/Habbit_tracker',
    live: 'https://habbit-tracker-1-bmuo.onrender.com/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Medical Summarizer',
    description: 'AI-powered tool synthesizing long medical reports into readable summaries.',
    image: '/project/medical-summarizer.png',
    video: '/project/MEDICAL_SUMMARISER_REPORT.mp4',
    link: 'https://medical-summarizer-o9iw.onrender.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Supabase', icon: <Code key="supa" /> },
      { name: 'Gemini API', icon: <Code key="gemini" /> },
    ],
    github: 'https://github.com/SURAJ-PARMAR2005/Hack_LLM2',
    live: 'https://medical-summarizer-o9iw.onrender.com/',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
];
