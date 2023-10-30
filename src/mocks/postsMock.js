import { v4 as uuidv4 } from 'uuid';


export const posts = [
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://github.com/pedrofnuness.png",
      name: "Pedro Nunes",
      role: "Software Developer @West System"
    },
    content: [
      { type: 'paragraph', content: 'Wow, what an awesome app!'},
      { type: 'paragraph', content: 'Looking foward to explore more and share some experience'},
      { type: 'link', content: "Let's connect on LinkedIn"},
    ],
    publishedAt: new Date('2023-10-29 19:30:00')
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://github.com/o-yurimaciel.png",
      name: "Yuri Maciel",
      role: "Software Developer @West System"
    },
    content: [
      { type: 'paragraph', content: 'Incredably amazing what the NextJS can do!'},
      { type: 'paragraph', content: 'Imagine puting it together with some Electron app?!?!?!'},
    ],
    publishedAt: new Date('2023-10-29 19:30:00')
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl: "https://github.com/Patrickdevbjj.png",
      name: "Patrick Rodrigues",
      role: "Software Architect @West System"
    },
    content: [
      { type: 'paragraph', content: 'We need to refactor all our backend right now.'},
      { type: 'paragraph', content: 'Who still uses React in the frontend btw? Lets implement some Java here too'},
    ],
    publishedAt: new Date('2023-10-29 19:30:00')
  },
];
