import { HTMLAttributes } from "react";
import { Branding } from "@/design-system/components";
import { Monogram } from "@/design-system/svg";
import styles from './brand.module.css'

interface BrandProps {
  orientation?: Orientation
  size?: Size
  colorScheme?: ColorScheme,
  className?: HTMLAttributes<HTMLDivElement>['className']
}

export default function Brand({
  size = 'medium',
  orientation = 'horizontal',
  colorScheme = 'auto',
  className = ''
}: BrandProps) {

  const monogramSize: Sizeable<number> = {
    xsmall: 24,
    small: 32,
    medium: 42,
    large: 58,
    xlarge: 64
  }

  const fillColor = {
    auto: "hsla(var(--color-foreground-hsl), 1)",
    ligth: "hsla(var(--color-gunmetal-hsl), 1)",
    dark: "hsla(var(--color-white-smoke-hsl), 1)"
  }

  return (
    <Branding
      brandname="Alex Alvarez G&aacute;rciga"
      tagline="Software Engineer &amp; Web Developer"
      orientation={orientation}
      size={size}
      className={`${className} ${styles[colorScheme]}`}
    >
      <Monogram width={monogramSize[size]} height={monogramSize[size]}
        fill={fillColor[colorScheme]} />
    </Branding>
  )
}