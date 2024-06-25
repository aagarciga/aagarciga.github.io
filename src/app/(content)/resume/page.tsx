import { Breadcrumbs } from "@/components/ui";

export default function Page() {

  return (
    <>
      <section className="sidebar-layout__top-widget">
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Home', href: { pathname: '/' } },
            { label: 'Resume', href: { pathname: '/resume' }, active: true },
          ]}
        />
      </section>
      <main className="sidebar-layout__main p-4 max-w-xl">
        <header className="mb-4">
          <h1 className="text-2xl">Experience</h1>
        </header>
        <section className="mb-4">
          <header>
            <h2 className="text-lg font-bold">Origin IT Solutions B.W. - ACSION</h2>
            <span className="text-xs ">04/2020 - 01/2024</span>
          </header>
          <h3 className="font-bold">Lead Frontend-Engineer, Full Stack Engineer</h3>
          <ul className="list-disc pl-5">
            <li>Led the front-end development of a healthcare and wellness solution for medical screening and doctor-patient shared decision-making, focused on improving the health system in Suriname.</li>
            <li>Spearheaded and enforced best practices to drive the software development lifecycle through Microsoft Azure DevOps and agile methodologies.</li>
            <li>Served as a consultant to the company&apos;s clients on UI/UX design and front-end implementation, ensuring new projects and opportunities for extending contracts and improving B2B client relationships.</li>
            <li>Integrated new features and improved performance in some of the company&apos;s existing products, leveraging and improving client trust in the company&apos;s current solutions and services.</li>
            <li>Architected, designed, and implemented an Expo-based React Native mobile application for healthcare and health insurance using Microsoft Azure Identity Platform and zero-trust security, and Microsoft Azure Communication Services for messaging. This creation opened up new opportunities for the company to expand into the Sint Maarten and Curaçao markets.</li>

          </ul>
        </section>

        <section className="mb-4">
          <header >
            <h2 className="text-lg  font-bold">Turmundo S.A.</h2>
            <span className="text-xs">08/2016 - 03/2020</span>
          </header>
          <h3 className="font-bold">Chief Technology Officer</h3>
          <ul className="list-disc pl-5">
            <li>Developed and implemented the company&apos;s overall technology strategy, roadmap, and vision to support business objectives and enhance operational efficiency. As an example, this allowed the inclusion of a flight ticketing system from the collaboration with the Surinamese company Fly Allways into the sales department.</li>
            <li>Directed the IT department, including staff recruitment, training, performance evaluation, budgeting, and resource allocation for technology investments.</li>
            <li>Worked closely with other departments, such as operations, sales, marketing, and finance, to align technology initiatives with business requirements and support cross-functional projects. Had a direct impact on the efficiency of the provider contracting process, converting a year-long repeating process into a one-month semi-automatic process, reducing errors and digitalizing the year-in-course contracts with hotels and other service providers for seamless availability lookup.</li>
            <li>Led digital transformation initiatives, such as implementing new technologies, automation, and digital platforms to improve customer experience, streamline operations, and drive business growth. Implemented data management and analytics using Microsoft Power BI and Azure Cloud Services to gather, analyze, and interpret data for informed decision-making and strategic planning. This allowed the company to monitor the transition into a multi-destination model by supporting new operations in destinations like Suriname, and Curaçao.</li>
            <li>Spearheaded innovation and research by staying updated on emerging software development technologies, trends, and best practices in the travel and tourism industry, directing proof-of-concepts, and exploring innovative solutions like offline map applications oriented to visitors&apos; experiences in destinations such as Haiti, Curaçao, and Suriname. These initiatives enhanced the company&apos;s competitiveness and customer experience.</li>
          </ul>
        </section>

        <section className="mb-4">
          <header >
            <h2 className="text-lg  font-bold">Casabe LLC</h2>
            <span className="text-xs">10/2015 - 08/2016</span>
          </header>
          <h3 className="font-bold">Frontend/UI Developer</h3>
          <ul className="list-disc pl-5">
            <li>Implemented several SVG-based animations with GSAP and CSS3 to improve website interactions and competitiveness, aligning with current market trends.</li>
            <li>Collaborated directly with graphic and editorial designers to convert PSD and Illustrator deliverables into coded, responsive HTML5 and CSS3 web page markup, ensuring adherence to design specifications.</li>
            <li>Integrated web application front-ends with RESTful APIs and web services from various backend technologies like Microsoft ASP.NET MVC, Ruby on Rails, Java, and Python in close collaboration with back-end developers.</li>
            <li>Ensured cross-browser compatibility across Safari, Chrome, Firefox, Internet Explorer, and Edge for all front-end implementations.</li>

          </ul>
        </section>

        <section className="mb-4">
          <header >
            <h2 className="text-lg  font-bold">Previous Experiences</h2>
            <span className="text-xs">09/2012 - 09/2016</span>
          </header>
          <h3 className="font-bold">Full Stack Software Engineer | Freelancer</h3>
          <p className="">Prior experience includes roles at the University of Havana IT Department, and freelance work for companies like GMixon-Pixeliris and Fermen Corporation, leveraging communication, problem-solving, and adaptability skills.</p>

        </section>
      </main>
      {/* <section className="sidebar-layout__bottom-widget">

      </section>
      <footer className="sidebar-layout__footer">

      </footer> */}
    </>

  )
}
