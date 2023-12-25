import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  paul,
  daria,
  kathy,
  carhub,
  reka,
  hilink,
  threejs,
  sass,
  next,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'works',
    title: 'Works',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Next.js',
    icon: next,
  },
  {
    title: 'Typescript',
    icon: typescript,
  },
  {
    title: 'SASS',
    icon: sass,
  },
  {
    title: 'MongoDB',
    icon: mongodb,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'SASS',
    icon: sass,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'Cedro',
    iconBg: '#383E56',
    date: 'March 2022 - October 2022',
    points: [
      'Developing and maintaining websites using Vanilla.js and BEM methodologies.',
      'Collaborating with cross-functional teams including designers and other developers.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Developer',
    company_name: 'Freelance',
    iconBg: '#E6DEDD',
    date: 'December 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'Elias did a great job with the layout of the landing page in accordance with our layout.',
    name: 'Paul P.',
    designation: 'CFO',
    company: 'Paramount Web',
    image: paul,
  },
  {
    testimonial:
      'Our team is extremely grateful to Elias for developing and supporting our corporate website.',
    name: 'Daria M.',
    designation: 'COO',
    company: 'Line Group',
    image: daria,
  },
  {
    testimonial:
      'It was a pleasure to work with Elias on our investment project. We look forward to working together in the future.',
    name: 'Kathy A.',
    designation: 'CTO',
    company: '456 Enterprises',
    image: kathy,
  },
]

const projects = [
  {
    name: 'Car Showcase',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carhub,
    source_code_link: 'https://github.com/RaiseOnce/car-showcase',
    site_link: 'https://car-showcase-dusky-tau.vercel.app',
  },
  {
    name: 'Reka FM',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'bem',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: reka,
    source_code_link: 'https://github.com/eliasjonah/reka',
    site_link: 'https://eliasjonah.github.io/reka-web',
  },
  {
    name: 'Hilink',
    description:
      'The website of the travel guide application and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: hilink,
    source_code_link: 'https://github.com/RaiseOnce/travel-app',
    site_link: 'https://travel-app-alpha-blue.vercel.app',
  },
]

export { services, technologies, experiences, testimonials, projects }
