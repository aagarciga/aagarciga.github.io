import { Branding } from "@/components/ui";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="sidebar-layout__main flex justify-center flex-col max-w-xl">
      <div className="branding-layout px-4 pt-4" >
        <Branding size="l" colorMode="auto" />
      </div>
      <p className="p-4">I am Alex, a software engineer with over a decade of experience continuously honing my skills in crafting web applications, designing user-friendly interfaces, and studiying algorithms & data structures.</p>
      <p className="bg-primary p-4 text-white-smoke">In my past role as a lead front-end engineer at Origin IT Solutions, I combine my passion for web development and design with my interest in cloud infrastructure and open web technologies. I have more than 12 years of experience in creating and improving web applications for various clients and industries, using HTML, ES5, ES6, Typescript, React, CSS, Next.js, Figma, C# and .Net Technologies.</p>

      <Link href={"/resume"}
        className="flex ml-4 bg-secondary text-white-smoke rounded-sm size-fit px-4 py-2 mt-4 text-sm hover:bg-primary transition ease-in-out delay-50 bg-blue-500 duration-300"
      ><DocumentTextIcon width={16} height={16} color='hsla(var(--color-white-smoke-hsl, 1)' className="mr-1" /> Read my resume</Link>
      <p className="p-4">I enjoy mentoring, collaborating with cross-functional teams, and implementing agile methodologies to deliver user-friendly, maintainable, and high-performance software. I am always eager to learn and adopt new languages, frameworks, and tools to meet project needs and solve real-world problems.</p>
      <p className="p-4">My goal is to leverage my skills and knowledge to build innovative web solutions that enhance people&apos;s lives and experiences.</p>
    </main>
  );
}
