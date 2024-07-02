import { Breadcrumbs, TechSkills } from "@/app/ui"
import styles from './page.module.css'
export default function Page() {

  return (
    <main className={styles.main}>
      <section>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Home', href: { pathname: '/' } },
            { label: 'Resume', href: { pathname: '/resume' } },
            { label: 'Skills', href: { pathname: '/resume/skills' }, active: true },
          ]}
        />
      </section>

      <TechSkills />
    </main>
  )
}