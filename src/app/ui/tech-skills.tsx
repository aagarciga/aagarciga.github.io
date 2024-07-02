import { HTMLAttributes } from 'react'
import styles from './tech-skills.module.css'

interface TechSkillsProps {
  className?: HTMLAttributes<HTMLDivElement>['className']
}
export default function TechSkills({ className }: TechSkillsProps) {
  const categories = [
    {
      name: 'Frontend',
      list: [
        { category: 'Foundations', skills: ['HTML5', 'CSS3', 'ES5/ES6'] },
        { category: 'Libraries', skills: ['React', 'jQuery', 'GSAP', 'Framer Motion'] },
        { category: 'Frameworks', skills: ['Next.js', 'Gatsby', 'Webpack'] },
        { category: 'Styles', skills: ['Tailwindcss', 'Bootstrap', 'Material UI', 'Sass', 'Less'] },
      ]
    },
    {
      name: 'Backend',
      list: [
        { category: 'Languages', skills: ['JavaScript', 'Typescript', 'C#', 'Java', 'PHP'] },
        { category: 'Technology', skills: ['ASP.NET', 'Node.js', 'Synfony'] },
        { category: 'API', skills: ['REST', 'Websocket', 'GraphQL', 'OData'] },
        { category: 'Security', skills: ['MS Identity Framework', 'MS Identity Platform', 'OAuth 2.0 (with PCKI)', 'Zero Trust'] },
      ]
    },
    {
      name: 'DevOps',
      list: [
        { category: 'Cloud', skills: ['Azure', 'Vercel'] },
        { category: 'CI/CD', skills: ['Azure DevOps', 'GitHub Actions'] },
        { category: 'Source Control', skills: ['Git', 'SVN'] },
        { category: 'Infrastructure', skills: ['Apache', 'Docker', 'VMWare'] },
      ]
    },
    {
      name: 'Databases',
      list: [
        { category: 'RDBMS', skills: ['MS SQL', 'MySQL', 'Maria DB', 'Postgres', 'SQLite'] },
      ]
    },
    {
      name: 'Mobile',
      list: [
        { category: 'Cross Platform', skills: ['React Native', 'Expo'] },
      ]
    }
  ]

  return (
    <article className={`${styles.container} ${className}`}>
      <h2 className={styles.title}>Full-stack Development - Tech Skills</h2>
      <div className={styles.skills}>

        {categories.map(({ name, list }) => (
          <div key={name} className={styles.category}>
            <h4 className={styles.subtitle}>{name}</h4>
            {list.map(({ category, skills }) => (
              <div key={category} className={styles['sub-group']}>
                <h5>{category}</h5>
                {skills.map((skill) => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  )
}
