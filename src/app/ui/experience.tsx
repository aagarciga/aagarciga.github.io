import { HTMLAttributes } from 'react'
import styles from './experience.module.css'

interface ExperienceProps {
  className?: HTMLAttributes<HTMLDivElement>['className']
}

interface ExperienceItem {
  company: string;
  duration: string;
  role: string;
  description: string[];
}

export default function Experience({ className = '' }: ExperienceProps) {
  const experienceItems: ExperienceItem[] = [
    {
      company: 'Origin IT Solutions B.W. - ACSION',
      duration: '04/2020 - 01/2024',
      role: 'Lead Frontend-Engineer, Full Stack Engineer',
      description: [
        'Led the development of a healthcare and wellness solution for medical screening and doctor-patient shared decision-making.',
        'Implemented best practices to drive the software development lifecycle through Microsoft Azure DevOps and agile methodologies.',
        'Served as a consultant to clients on UI/UX design and front-end implementation.',
        'Integrated new features and improved performance in existing products, enhancing client trust in the company&apos;s current solutions and services.',
        'Architected, designed, and implemented a React Native mobile application for healthcare and health insurance using Microsoft Azure Identity Platform and zero-trust security.',
      ],
    },
    {
      company: 'Turmundo S.A.',
      duration: '08/2016 - 03/2020',
      role: 'Chief Technology Officer',
      description: [
        'Developed and implemented the company&apos;s overall technology strategy, roadmap, and vision to support business objectives and enhance operational efficiency.',
        'Directed the IT department, including staff recruitment, training, performance evaluation, budgeting, and resource allocation for technology investments.',
        'Worked closely with other departments to align technology initiatives with business requirements and support cross-functional projects.',
        'Led digital transformation initiatives, such as implementing new technologies, automation, and digital platforms to improve customer experience, streamline operations, and drive business growth.',
        'Spearheaded innovation and research by staying updated on emerging software development technologies, trends, and best practices in the travel and tourism industry.',
      ],
    },
    {
      company: 'Casabe LLC',
      duration: '10/2015 - 08/2016',
      role: 'Frontend/UI Developer',
      description: [
        'Implemented SVG-based animations with GSAP and CSS3 to improve website interactions.',
        'Collaborated with graphic and editorial designers to convert PSD and Illustrator deliverables into coded, responsive HTML5 and CSS3 web page markup.',
        'Integrated web application front-ends with RESTful APIs and web services from various backend technologies.',
        'Ensured cross-browser compatibility across popular browsers.',
      ],
    },
    {
      company: 'Previous Experiences',
      duration: '09/2012 - 09/2016',
      role: 'Full Stack Software Engineer | Freelancer',
      description: [
        'Prior experience includes roles at the University of Havana IT Department and freelance work for companies like GMixon-Pixeliris and Fermen Corporation.',
      ],
    },
  ];

  return (
    <article className={`${className} ${styles.experiences}`}>
      <header>
        <h2>Experience</h2>
      </header>
      {experienceItems.map((item, index) => (
        <Section
          key={index}
          company={item.company}
          duration={item.duration}
          role={item.role}
          description={item.description}
        />
      ))}
    </article>
  );
}

interface SectionProps {
  company: string;
  duration: string;
  role: string;
  description: string[];
}

function Section({ company, duration, role, description }: SectionProps) {
  return (
    <section className={styles.experience}>
      <header>
        <h3>{company}</h3>
        <span>{duration}</span>
      </header>
      <h5>{role}</h5>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
