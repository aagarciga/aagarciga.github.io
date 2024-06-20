import Monogram from "./Monogram";



export default function Branding() {
  const size = 42
  return (
    <div className="branding w-auto flex gap-2 bg-white-smoke dark:bg-gunmetal text-gunmetal dark:text-white-smoke" >
      <Monogram width={size} height={size} fill="hsla(var(--foreground-hsl), 1)" />
      <div className="branding-text-layout flex flex-col gap-0">
        <span className="brand-name">Alex Alvarez Gárciga</span>
        <span className="tagline text-xs">Software Engineer & Web Developer</span>
      </div>
    </div>
  )
}