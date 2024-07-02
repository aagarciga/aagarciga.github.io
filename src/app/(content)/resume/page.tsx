import { Breadcrumbs } from "@/app/ui";
import Experience from "@/app/ui/experience";

import styles from './page.module.css'

export default function Page() {

  return (
    <main className={styles.main}>
      <section className="">
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Home', href: { pathname: '/' } },
            { label: 'Resume', href: { pathname: '/resume' }, active: true },
          ]}
        />
      </section>
      <Experience />
    </main>
  )
}
