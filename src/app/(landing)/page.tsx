import Branding from "@/components/ui/branding";

export default function Home() {
  return (
    <main className="sidebar-layout__main flex justify-center flex-col">
      <div className="branding-layout px-4 pt-4" >
        <Branding />
      </div>
      <p className="p-4">I am Alex, a software engineer with over a decade of experience continuously honing my skills in crafting web applications, designing user-friendly interfaces, and learning algorithms & data structures.</p>
      <p className="bg-internation-orange p-4 text-white-smoke">In my past role as a lead front-end engineer at Origin IT Solutions, I combine my passion for web development and design with my expertise in cloud infrastructure and open web technologies. I have more than 12 years of experience in creating and improving web applications for various clients and industries, using HTML, ES5, ES6, React, CSS, Next.js, Figma, C# and .Net Technologies.</p>
      <p className="p-4">I enjoy mentoring, collaborating with cross-functional teams, and implementing agile methodologies to deliver user-friendly, maintainable, and high-performance software. I am always eager to learn and adopt new languages, frameworks, and tools to meet project needs and solve real-world problems.</p>
      <p className="p-4">My goal is to leverage my skills and knowledge to build innovative web solutions that enhance people&apos;s lives and experiences.</p>


    </main>
  );
}
