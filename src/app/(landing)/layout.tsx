

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sidebar-layout landing">
      <nav className="sidebar-layout__main-menu">
        <h1 className="flex items-center justify-center">Menu</h1>

      </nav>
      {children}
    </div>
  )
}