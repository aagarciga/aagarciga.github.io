import { MainMenu } from "@/components/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sidebar-layout landing">
      <div className="sidebar-layout__main-menu">
        <MainMenu />

      </div>
      {children}
    </div>
  )
}