import { JobType, ExperienceLevel } from '@prisma/client';
import { faker } from '@faker-js/faker';

import { companiesSeeder } from '../company/company.seeder';

export const jobsSeeder = [
  {
    id: '3b6c2eb1-0637-4df1-bd93-c8a4efc2007c',
    title: 'Senior front-end developer',
    about: faker.lorem.paragraph(),
    summary:
      'A rapidly growing, well established marketing firm is looking for an experienced web developer for a full-time position. In this role, you will develop websites, apps, emails and other forms of digital electronic media, all while maintaining brand standards across design projects and other marketing communication materials.',
    imageLogo: faker.image.url(),
    type: JobType.FULL_TIME,
    location: 'Menlo Park, CA',
    salary: faker.finance.amount({ min: 100000 }),
    experience: ExperienceLevel.MID_LEVEL,
    responsibilities: [
      'Build next-generation web applications with a focus on the client side.',
      "Redesign UI's, implement new UI's, and pick up Java as necessary.",
      'Explore and design dynamic and compelling consumer experiences.',
      'Design and build scalable framework for web applications.',
    ],
    qualifications: [
      'BA/BS degree in a technical field or equivalent practical experience',
      '2 years of relevant work experience in software development.',
      'Programming experience in C, C++ or Java.',
      'Experience with AJAX, HTML and CSS.',
    ],
    companyId: companiesSeeder[0].id,
  },
  {
    id: 'f6c6045e-1e9e-414d-9736-e3bf2dc8559c',
    title: 'Web Applications Developer',
    about: faker.lorem.paragraph(),
    summary:
      'Client needs a back-end Java developer who has worked mainly on Java, J2EE, Spring, Web Services, and other Java related technologies.',
    imageLogo: faker.image.url(),
    type: JobType.INTERNSHIP,
    location: 'Lexington, MA',
    salary: faker.finance.amount({ min: 90000 }),
    experience: ExperienceLevel.ENTRY_LEVEL,
    responsibilities: [
      'Build next-generation web applications with a focus on the client side.',
      "Redesign UI's, implement new UI's, and pick up Java as necessary.",
      'Explore and design dynamic and compelling consumer experiences.',
      'Design and build scalable framework for web applications.',
    ],
    qualifications: [
      'BA/BS degree in a technical field or equivalent practical experience',
      '2 years of relevant work experience in software development.',
      'Programming experience in C, C++ or Java.',
      'Experience with AJAX, HTML and CSS.',
    ],
    companyId: companiesSeeder[1].id,
  },
  {
    id: '7371d8be-5b3e-449c-bedd-3c8dc565fa75',
    title: 'Sr. SQL Server Developer',
    about: faker.lorem.paragraph(),
    summary:
      'Understand and model complex business requirements into database schemas and work with existing databases in SQL and NOSQL data stores. Develop high performance stored procedures, triggers and other database level code to provide data services to other teams.',
    imageLogo: faker.image.url(),
    type: JobType.FULL_TIME,
    location: 'Seattle, WA',
    salary: faker.finance.amount({ min: 300000 }),
    experience: ExperienceLevel.SENIOR_LEVEL,
    responsibilities: [
      'Build next-generation web applications with a focus on the client side.',
      "Redesign UI's, implement new UI's, and pick up Java as necessary.",
      'Explore and design dynamic and compelling consumer experiences.',
      'Design and build scalable framework for web applications.',
    ],
    qualifications: [
      'BA/BS degree in a technical field or equivalent practical experience',
      '2 years of relevant work experience in software development.',
      'Programming experience in C, C++ or Java.',
      'Experience with AJAX, HTML and CSS.',
    ],
    companyId: companiesSeeder[2].id,
  },
  {
    id: '62aa8549-18d9-4d31-9337-f990cd2bac0a',
    title: 'Full Stack Web Developer',
    about: faker.lorem.paragraph(),
    summary:
      'We are seeing a driven, curious, passionate full-stack web developer to help change how people learn creative skills and effortlessly create the images they imagine. You’ll be part of a new rapid prototyping and development team helping to apply lean startup development methodologies and modern web technologies to shape the future of Creative Cloud.',
    imageLogo: faker.image.url(),
    type: JobType.CONTRACT,
    location: 'San Francisco, CA',
    salary: faker.finance.amount({ min: 110000 }),
    experience: ExperienceLevel.MID_LEVEL,
    responsibilities: [
      'Build next-generation web applications with a focus on the client side.',
      "Redesign UI's, implement new UI's, and pick up Java as necessary.",
      'Explore and design dynamic and compelling consumer experiences.',
      'Design and build scalable framework for web applications.',
    ],
    qualifications: [
      'BA/BS degree in a technical field or equivalent practical experience',
      '2 years of relevant work experience in software development.',
      'Programming experience in C, C++ or Java.',
      'Experience with AJAX, HTML and CSS.',
    ],
    companyId: companiesSeeder[0].id,
  },
];
