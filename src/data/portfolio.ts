export const profile = {
  name: 'Chetan',
  initial: 'C',
  location: 'Bengaluru, India',
  education: '2nd Year Engineering, CSE-DS',
  college: 'East Point College of Engineering',
  email: 'hugarchetan07@gmail.com',
  // Leave empty until the links are ready; the site shows a "coming soon" state instead.
  github: '',
  linkedin: '',
  intro:
    "I'm a passionate and hardworking engineering student who enjoys exploring technology, building projects, solving problems, and collaborating with people. I believe in continuous learning and creating things that have a meaningful impact.",
} as const;

export type SkillCategory = 'Communication' | 'Programming' | 'Productivity' | 'Creative';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: 'MessageSquare' | 'Code2' | 'FileSpreadsheet' | 'Camera';
  note: string;
}

export const skills: Skill[] = [
  { name: 'Communication', category: 'Communication', icon: 'MessageSquare', note: 'Clear communication and working well with people' },
  { name: 'Python Programming', category: 'Programming', icon: 'Code2', note: 'Writing Python to solve problems and build projects' },
  { name: 'Microsoft Office', category: 'Productivity', icon: 'FileSpreadsheet', note: 'Microsoft Office Specialization' },
  { name: 'Photography', category: 'Creative', icon: 'Camera', note: 'Capturing moments and telling stories through the lens' },
];

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  github: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    id: 'luxshare',
    number: '01',
    title: 'LUXSHARE',
    description: 'Fractional ownership of luxury cars.',
    image: 'https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Luxury sports car in a dark setting',
    stack: ['Frontend', 'Backend', 'Database'],
    github: '',
    liveDemo: '',
  },
  {
    id: 'agrishare',
    number: '02',
    title: 'AGRISHARE',
    description: 'Fractional ownership of agricultural equipment to help farmers.',
    image: 'https://images.pexels.com/photos/37314899/pexels-photo-37314899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Aerial view of a tractor working on green farmland',
    stack: ['Frontend', 'Backend', 'Database'],
    github: '',
    liveDemo: '',
  },
  {
    id: 'medication-management',
    number: '03',
    title: 'MEDICATION MANAGEMENT SYSTEM FOR OLD AGE HOMES',
    description: 'An easy-to-use, elder-friendly website built for medication management.',
    image: 'https://images.pexels.com/photos/7551663/pexels-photo-7551663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Caregiver organizing medication on a table',
    stack: ['Frontend', 'Backend', 'Database'],
    github: '',
    liveDemo: '',
  },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;
