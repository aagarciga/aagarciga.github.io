"use client"
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Brand, Experience, TechSkills } from "../ui";
import { Button } from "@/design-system/components";
import { useRouter } from "next/navigation";

import styles from './page.module.css'



export default function Home() {
  const router = useRouter()

  return (
    <main className={[styles.main].join(' ')}>
      <section className={[styles.introduction].join(' ')}>
        <header className={[].join(' ')} >
          <Brand size="large" />
        </header>
        {/* <p className={[].join(' ')}>It is so nice to meet you! I am Alex, a software engineer with over a decade of experience continuously honing my skills in crafting web applications, designing user-friendly interfaces, and studying algorithms & data structures.</p>
        <p className={[].join(' ')}>My goal is to leverage my skills and knowledge to build innovative solutions that enhance people&apos;s lives and experiences.</p>
        <p className={[].join(' ')}>I enjoy mentoring, collaborating with cross-functional teams, and implementing agile methodologies to deliver user-friendly, maintainable, and high-performance software. I am always eager to learn and adopt new languages, frameworks, and tools to meet project needs and solve real-world problems.</p>
        <p className={[].join(' ')}>In my past role as a lead front-end engineer at Origin IT Solutions, I combine my passion for web development and design with my interest in cloud infrastructure and open web technologies. I have more than 12 years of experience in creating and improving web applications for various clients and industries, using HTML, ES5, ES6, Typescript, React, CSS, Next.js, Figma, C# and .Net Technologies.</p> */}


        <p>It is so nice to meet you!, I am Alex. As a web developer with over a decade of experience, I have managed to stay on top of what users expect from modern applications.</p>
        <p>I have chosen to master JavaScript, HTML5, and CSS3, specializing in front-end web development because I enjoy implementing and delivering high-quality UI/UX designs. While I am proud of my sensibilities regarding aesthetically pleasing yet functional design, I am not a designer by trade, and I have immense respect for those who are.</p>
        <p>As a software engineer, I strive to understand how everything works and see all processes as a whole. This makes me a generalist, and I have often found myself spearheading internal tools, proof of concepts, or initiating greenfield projects in my past roles. However, in the past I have tried to avoid spreading myself too thin by focusing on C#, .NET technologies, and Azure as the workspace to become proficient at. So I can be a jack of all trades, master of one.</p>
        {/* <p>Throughout my career, I have worked with Delphi, PHP, Visual FoxPro, Java, C/C++, Android, Node.js, Angular, and other technologies. Currently, I enjoy building applications with React, React Native, Next.js, and .NET Core. I am always eager to learn new languages or technologies when required. I can also switch between paradigms, from Object-Oriented Programming to functional approaches, comfortably writing imperative or declarative code as needed.</p> */}
        <Button className={[].join(' ')} label="Get my resume" primary Icon={DocumentTextIcon} onClick={() => router.push('/resume')} />



      </section>
      <aside className={[].join(' ')}>

        <Experience className={styles.experience} />
        <aside className={[styles.sidebar].join(' ')}></aside>
      </aside>
    </main>

  );
}
