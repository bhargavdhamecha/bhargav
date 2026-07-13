import { ExperienceEntry, SkillGroup, EducationEntry } from '../models/portfolio.model';

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Java Software Engineer',
    company: 'Agile Infoways LTD. · Ahmedabad, Gujarat',
    period: 'SEP 2025 — PRESENT',
    highlights: [
      'Collaborated with offshore teams at Paychex to design, develop, and deliver backend features across distributed teams.',
      'Designed a digital billing solution replacing paper statements — cutting operational costs by ~$80K/year.',
      'Built RESTful APIs powering billing and customer communication workflows between microservices.'
    ]
  },
  {
    role: 'Associate Software Engineer',
    company: 'Asite Solution LTD. · Ahmedabad, Gujarat',
    period: 'SEP 2024 — AUG 2025',
    highlights: [
      'Wrote and maintained JUnit test suites, lifting code coverage across microservices.',
      'Cut build time by 30% through targeted code refactoring.',
      'Resolved high-priority client-reported bugs under tight deadlines.',
      'Upgraded third-party dependencies stack-wide with zero blocker issues post-deployment.'
    ]
  },
  {
    role: 'Trainee Software Engineer',
    company: 'Asite Solution LTD. · Ahmedabad, Gujarat',
    period: 'JUN 2023 — AUG 2024',
    highlights: [
      'Built file tagging and deletion features for faster search and retrieval.',
      'Refactored UI components into reusable, scalable pieces.',
      'Upgraded Angular, jQuery, and Highcharts.js for platform stability.'
    ]
  },
  {
    role: 'Software Developer Intern',
    company: 'Asite Solution LTD. · Ahmedabad, Gujarat',
    period: 'FEB 2023 — MAY 2023',
    highlights: [
      'Designed and built modules for an Applicant Tracking System while in structured training.'
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  { label: 'BACKEND', items: ['Java', 'Spring Boot', 'REST APIs', 'Java EJB', 'Hibernate', 'Microservices', 'Design Patterns', 'SQL'] },
  { label: 'FRONTEND', items: ['Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery'] },
  { label: 'TESTING', items: ['JUnit', 'Mockito', 'JMockit', 'Karma', 'Jasmine'] },
  { label: 'TOOLS & PLATFORMS', items: ['Git', 'Docker', 'Jenkins', 'JIRA', 'Grafana', 'AWS', 'Azure', 'Gradle', 'Maven'] }
];

export const EDUCATION: EducationEntry = {
  degree: 'Bachelor of Engineering, Computer Science',
  school: 'VVP Engineering College, Rajkot, Gujarat',
  period: '2019 — 2023',
  meta: 'CGPA 8.17 / 10.00'
};
