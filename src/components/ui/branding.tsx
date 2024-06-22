
import { HTMLAttributes } from "react";
import Monogram from "./monogram";


interface BrandingProps {
  className?: HTMLAttributes<HTMLDivElement>['className']
  colorMode?: 'ligth' | 'dark' | 'auto'
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}

export default function Branding({
  colorMode = 'auto',
  size = 'm',
  className,
  ...props }: BrandingProps) {
  const sizeMode = {
    xs: 16,
    s: 24,
    m: 32,
    l: 42,
    xl: 58
  }

  const fontSize = {
    xs: 'text-xs',
    s: 'text-sm',
    m: 'text-base',
    l: 'text-xl',
    xl: 'text-2xl'
  }
  const taglineFontSize = {
    xs: 'text-xs',
    s: 'text-xs',
    m: 'text-xs',
    l: 'text-s',
    xl: 'text-base'
  }
  const color = {
    auto: "text-gunmetal dark:text-white-smoke",
    ligth: "text-gunmetal",
    dark: "text-white-smoke"
  }
  const fillColor = {
    auto: "hsla(var(--foreground-hsl), 1)",
    ligth: "hsla(var(--color-gunmetal-hsl), 1)",
    dark: "hsla(var(--color-white-smoke-hsl), 1)"
  }

  return (
    <div {...props} className={["branding w-max flex items-center gap-2 bg-transparent", color[colorMode], className].join(' ')} >
      <Monogram width={sizeMode[size]} height={size} fill={fillColor[colorMode]} />
      <div className={["branding-text-layout flex flex-col gap-0 content-start", color[colorMode]].join(' ')}>
        <span className={["brand-name", fontSize[size]].join(" ")}>Alex Alvarez Gárciga</span>
        <span className={["tagline", taglineFontSize[size]].join(" ")}>Software Engineer & Web Developer</span>
      </div>
    </div>
  )
}