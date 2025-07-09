// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import docker from './assets/tech_logo/docker.png';
import aws from './assets/tech_logo/aws.png';
import Terraform from './assets/tech_logo/terraform.png';
import Ansible from './assets/tech_logo/Ansible.png';
import GitHubActions from './assets/tech_logo/GitHubActions.png';
import Jenkins from './assets/tech_logo/jenkins.png';


import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import Django from './assets/tech_logo/dj.png'

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';


// Experience Section Logo's
import EutropiaITSolution from './assets/company_logo/EutropiaITSolution.jpg';


// Education Section Logo's
import ju from './assets/education_logo/ju2.png';
import uap from './assets/education_logo/uap.jpg';
import ansar from './assets/education_logo/AlAnsarSecondarySchool.png';


// Project Section Logo's
import pipeline from './assets/work_logo/pipeline.jpg';
import car from './assets/work_logo/car.jpeg';


export const SkillsInfo = [
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', logo: docker },
      { name: 'AWS', logo: aws },
      { name: 'Terraform', logo: Terraform },
      { name: 'Ansible', logo: Ansible },
      { name: 'GitHub Actions', logo: GitHubActions },
      { name: 'Jenkins', logo: Jenkins },

    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Django', logo: Django },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },

    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: EutropiaITSolution,
    role: "Software Engineer-Backend",
    company: "Eutropia IT Solution",
    date: "Jul 2023 - Present",
    desc: "Built and kept Python backends running smoothly for two web apps. Got cloud stuff working with AWS, Terraform, and Docker. Set up GitHub Actions to make deployments faster.",
      skills: [
      "Cloud",
      "HTML",
      "CSS",
      "Django",
      "AWS",
      "Terraform",
      "Docker",
      "GitHub",
      "MongoDB",
      "SQL",
      
      ],
  },
  
];

export const education = [
  {
    id: 0,
    img: ju,
    school: "Jahangirnagar University, Dhaka",
    date: "Jan 2025 - Jan 2026",
    grade: "Running",
    desc: "I am currently pursuing my Master’s degree in Computer Science at Jahangirnagar University. My academic journey here is helping me deepen my understanding of advanced computing concepts, algorithms, and modern technologies like artificial intelligence and data science. I am passionate about research, problem-solving, and applying theoretical knowledge to real-world challenges.",
    degree: "Master of Science - MS, Computer Science",
  },
  {
    id: 1,
    img: uap,
    school: "University of Asia Pacific, Dhaka",
    date: "Sept 2018 - Aug 2021",
    grade: "Hidden",
    desc: "I completed my BSc in Computer Science and Engineering from the University of Asia Pacific, where I gained a strong foundation in programming, algorithms, software development, and modern computing technologies.",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    id: 2,
    img: ansar,
    school: "Al Ansar Secondary School, Madinah, KSA",
    date: "Apr 2017 - March 2018",
    grade: "80%",
    desc: "I have successfully completed my Associate College Degree from Al Ansar Secondary School in Madinah, KSA. This academic journey provided me with a strong foundation in core subjects, discipline, and a global perspective through a diverse and enriching learning environment.",
    degree: "Associate Collage Degree",
  },
  
];

export const projects = [
  {
    id: 0,
    title: "Automated Web Application Deployment Pipeline (AWS, Terraform, GitHub Actions)",
    description:
      "Implemented CI/CD pipeline to streamline deployments, reducing manual errors and ensuring consistent, rapid releases.",
    image: pipeline,
    tags: ["AWS", "Terraform", "GitHub Actions", "Python", "Django", "AWS Elastic Beanstalk", "Docker", "AWS CloudWatch", "GitHub Secrets"],
    github: "https://github.com/mehedi1022/a-04",
    webapp: "https://githu.netlify.app/",
  },
  {
    id: 1,
    title: "CAR Dealership Application",
    description:
      "Led a team of four in developing a web-based car dealership platform using Python, Django, and Selenium. Technologies: Utilized Python, Django, and Selenium for efficient development and testing. Functionality: Facilitated car searches within the USA and UK, optimizing the customer experience.Contributions: Played a key role in database management and software automation, ensuring application efficiency.",
    image: car,
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django", "Selenium", "PostgreSQL", "MySQL"],
    github: "https://github.com/mehedi1022/a-04",
    webapp: "https://cs6546545.netlify.app/",
  },
  
];  