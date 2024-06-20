
import Branding from "@/components/ui/branding";
import MainMenu from "@/components/ui/main-menu";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sidebar-layout">
      <header className="sidebar-layout__header">
        <div className="branding-layout px-4 pt-4" >
          <Branding />
        </div>
      </header>
      <nav className="sidebar-layout__main-menu">
        <MainMenu />
      </nav>
      {children}
    </div>
  )
}