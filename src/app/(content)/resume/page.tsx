import { Breadcrumbs, TechSkills } from "@/app/ui";
import Experience from "@/app/ui/experience";

import styles from './page.module.css'
import Link from "next/link";
import { DocumentArrowDownIcon, PuzzlePieceIcon } from "@heroicons/react/24/solid";

export default function Page() {

  return (
    <main className={styles.main}>
      <section>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Home', href: { pathname: '/' } },
            { label: 'Resume', href: { pathname: '/resume' }, active: true },
          ]}
        />
      </section>
      <nav role="navigation" className="flex flex-col gap-2">
        <Link href={"/resume/2024.Software Engineer.Alex Alvarez Garciga.docx"} className="text-brandeis_blue dark:text-brandeis_blue-800 hover:underline flex items-center gap-1" download={true}>
          <DocumentArrowDownIcon width={16} height={16} fill="hsla(var(--color-primary-hsl),1)" />
          <span>Download Resume</span>
        </Link>
        <Link href="/resume/skills" className="text-brandeis_blue dark:text-brandeis_blue-800 hover:underline flex items-center gap-1">
          <PuzzlePieceIcon width={16} height={16} fill="hsla(var(--color-primary-hsl),1)" />
          <span>View Technical Competencies</span>
        </Link>
      </nav>
      <p className="mb-4 mt-4">Software engineer fluent in JavaScript & C#, with more than a decade of exposure to front-end technologies, Microsoft ASP.Net solutions, and Microsoft Azure Cloud Services. In love with React.js, Typescript, HTML5, and CSS3. Skilled in UI/UX design, algorithms, and data structures. Enthusiastic about creating maintainable, user-friendly software through agile methodologies. Able to quickly learn and adopt new paradigms, programming languages, frameworks, and tools to meet project needs.</p>

      {/* <TechSkills className={styles["tech-skills"]} /> */}
      <Experience />
    </main>
  )
}
