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
      <main className="sidebar-layout__main">
        <h1>Page</h1>

      </main>
      <section className="sidebar-layout__bottom-widget">

      </section>
      <footer className="sidebar-layout__footer">

      </footer>
    </>

  )
}
