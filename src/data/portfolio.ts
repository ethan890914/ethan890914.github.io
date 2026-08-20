export const profile = {
  name: 'Ethan Ding',
  title: 'Software Engineer | Full-Stack Developer',
  tagline:
    'Building innovative solutions with cutting-edge technology. Passionate about creating scalable applications and leveraging AI to solve complex problems.',
  email: 'yd3163@nyu.edu',
  phone: '+1 551-325-8501',
  location: 'New York, NY',
  social: {
    github: 'https://github.com/ethan890914',
    linkedin: 'https://linkedin.com/in/ethanding',
  },
};

export const media = {
  heptabaseExperienceUrl: 'https://www.youtube.com/embed/Bi1B0mFX7xQ',
};

export const education = [
  {
    school: 'New York University',
    degree: 'Master of Science in Computer Science',
    location: 'New York, U.S.',
    date: 'June 2026',
    year: '2026',
    month: 'Jun',
    day: '26',
    coursework:
      'Advanced Database System, Big Data and Machine Learning System, Big Data Analysis and Development',
  },
  {
    school: 'National Taiwan University',
    degree: 'Bachelor of Science in Computer Science and Information Engineering',
    location: 'Taipei, Taiwan',
    date: 'June 2023',
    year: '2023',
    month: 'Jun',
    day: '23',
  },
];

export const skills = [
  { category: 'Programming Languages', items: 'Python, JavaScript, TypeScript, C' },
  {
    category: 'Full-Stack Development',
    items: 'React.js, Vue.js, Redux, Tailwind CSS, Node.js, FastAPI, Flask, REST',
  },
  { category: 'Databases', items: 'PostgreSQL, MySQL, SQLite' },
  {
    category: 'Machine Learning & AI',
    items: 'PyTorch, CUDA, OpenCV, OpenAI API, RAG',
  },
  { category: 'Data Engineering', items: 'Apache Spark, Pytrend, ETL' },
  {
    category: 'Cloud & DevOps',
    items: 'GCP, AWS ECS, Serverless Framework, Gitflow, CI/CD, Docker, Kubernetes, Linux',
  },
];

export const experience = [
  {
    title: 'Software Engineer Intern | Heptabase',
    company: 'YC W22',
    location: 'Remote',
    date: '2025',
    year: '2025',
    month: 'Jan',
    day: '01',
    period: '2025 Jan – 2025 Aug',
    category: 'WORK' as const,
    achievements: [
      'Shipped an AI-powered PDF chat feature by integrating with OpenAI, delivered a production level feature within one week that enabled contextual QA for PDF documents.',
      'Delivered a scalable, end-to-end PDF parsing system POC, including the connection of backend and OCR services, database schema design, and integration of parsed result and existing functionalities.',
      'Optimized PDF processing performance by deploying on serverless architecture, leading to a 10x improvement in latency and 65% cost reduction through parallel processing.',
      'Established a full CI/CD pipeline for the self-deployed OCR service connected to AWS Elastic Container Service.',
    ],
  },
  {
    title: 'Software Engineer Intern | Appier',
    company: 'Enterprise AI solution platform',
    location: 'Taipei, Taiwan',
    date: '2023 - 2024',
    year: '2023',
    month: 'Jun',
    day: '01',
    period: '2023 Jun – 2024 Jun',
    category: 'WORK' as const,
    achievements: [
      'Leveraged generative AI for query expansion and embedding calculation to enhance a search engine POC, improving F1 score by 37% in processing unstructured queries.',
      'Built client-facing SaaS interfaces with React.js, enabling seamless integration of AI-powered features and enhancing user experience.',
      'Designed and implemented an efficient polling request and exception handling mechanism to manage uncertain API responses, substantially reducing request failures and improving data accuracy.',
      'Created interactive UI components using Tailwind CSS for file uploading, image cropping, and canvas operations.',
      'Developed Vue.js-based visualization tools to simplify complex API logics, improving data accessibility and insights.',
    ],
  },
  {
    title: 'Software Quality Assurance Intern | Shopline',
    company: 'E-commerce platform',
    location: 'Taipei, Taiwan',
    date: '2022 - 2023',
    year: '2022',
    month: 'Jul',
    day: '01',
    period: '2022 Jul – 2023 Jul',
    category: 'WORK' as const,
    achievements: [
      'Conducted end-to-end testing for e-commerce features used by 200,000+ merchants, covering interfaces, payments, and notifications.',
      'Automated daily regression testing with Cucumber and Selenium, detecting critical bugs early and reducing manual QA efforts.',
      'Designed and executed comprehensive test plans for manual validation of new features, ensuring release quality.',
    ],
  },
];

export const projects = [
  {
    title: 'Steam Games Trending Analysis',
    subtitle: '',
    date: '2024',
    year: '2024',
    month: 'Mar',
    day: '15',
    period: '2024 Mar',
    category: 'PROJECT' as const,
    description: [
      'Collected and analyzed trending data of top Steam games using Pytrend and Google Trends API to identify player interest patterns across 20,000+ records.',
      'Executed ETL processes on a 15GB dataset using Spark, uncovering factors influencing game popularity through integrated team findings.',
    ],
  },
  {
    title: 'Face Anti-Spoofing w/ E-Sun Bank',
    subtitle: 'Undergraduate Research | Taipei, Taiwan',
    date: '2022 - 2023',
    year: '2022',
    month: 'Sep',
    day: '01',
    period: '2022 Sep – 2023 Jun',
    category: 'RESEARCH' as const,
    description: [
      'Researched state-of-the-art techniques in face anti-spoofing fields, focusing on improving generalization across unseen attacks.',
      'Assisted in experiments of Domain-Generalized Face Anti-Spoofing with Unknown Attacks, ICIP 2023.',
      'Developed and tested face anti-spoofing models by integrating meta-learning and frequency decomposition techniques, achieving a 96% AUC score on the OCIM benchmark.',
    ],
  },
  {
    title: 'Open Vocabulary Segmentation w/ Google',
    subtitle: 'Undergraduate Research | Taipei, Taiwan',
    date: '2022 - 2023',
    year: '2022',
    month: 'Jan',
    day: '01',
    period: '2022 Jan – 2023 Jun',
    category: 'RESEARCH' as const,
    description: [
      'Developed a two-stage open vocabulary segmentation framework achieving an Average Precision score of 12.33 on the COCO dataset.',
      'Analyzed state-of-the-art techniques in open vocabulary segmentation fields.',
      'Utilized limited training data to fine-tune large foundation models like BLIP.',
    ],
  },
  {
    title: 'Legal-Tech Hackathon',
    subtitle: '',
    date: '2022',
    year: '2022',
    month: 'May',
    day: '20',
    period: '2022 May',
    category: 'PROJECT' as const,
    description: [
      'Led a winning team (1st place) in the Legal-Tech Hackathon, developing a Chrome extension for Lawsnote to provide similar case judgments, enhancing decision-making.',
    ],
  },
];

export type CategoryTag = 'WORK' | 'PROJECT' | 'RESEARCH' | 'EDUCATION';
