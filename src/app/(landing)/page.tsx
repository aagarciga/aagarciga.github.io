"use client"
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Brand } from "../ui";
import { Button } from "@/design-system/components";
import { useRouter } from "next/navigation";

import styles from './page.module.css'
import Experience from "../ui/experience";

export default function Home() {
  const router = useRouter()

  return (
    <main className={[styles.main].join(' ')}>
      <section className={[styles.introduction].join(' ')}>
        <header className={[].join(' ')} >
          <Brand size="large" />
        </header>
        <p className={[].join(' ')}>I am Alex, a software engineer with over a decade of experience continuously honing my skills in crafting web applications, designing user-friendly interfaces, and studying algorithms & data structures.</p>
        <p className={[].join(' ')}>My goal is to leverage my skills and knowledge to build innovative solutions that enhance people&apos;s lives and experiences.</p>
        <p className={[].join(' ')}>I enjoy mentoring, collaborating with cross-functional teams, and implementing agile methodologies to deliver user-friendly, maintainable, and high-performance software. I am always eager to learn and adopt new languages, frameworks, and tools to meet project needs and solve real-world problems.</p>
        <p className={[].join(' ')}>In my past role as a lead front-end engineer at Origin IT Solutions, I combine my passion for web development and design with my interest in cloud infrastructure and open web technologies. I have more than 12 years of experience in creating and improving web applications for various clients and industries, using HTML, ES5, ES6, Typescript, React, CSS, Next.js, Figma, C# and .Net Technologies.</p>
        <Button className={[].join(' ')} label="Get my resume" primary Icon={DocumentTextIcon} onClick={() => router.push('/resume')} />
      </section>
      <aside className={[].join(' ')}>
        <Experience className={styles.experience} />
        <aside className={[styles.sidebar].join(' ')}></aside>
      </aside>
    </main>

  );
}
