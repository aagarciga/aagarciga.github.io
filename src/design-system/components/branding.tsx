
import { HTMLAttributes } from "react";

import Link from "next/link";

import styles from './branding.module.css'

export interface BrandingProps {
  orientation?: Orientation
  brandname?: string
  tagline?: string
  children?: React.ReactNode
  className?: HTMLAttributes<HTMLDivElement>['className']
  brandnameClassName?: HTMLAttributes<HTMLDivElement>['className']
  taglineClassName?: HTMLAttributes<HTMLDivElement>['className']
  size?: Size
}

export default function Branding({
  brandname = "Brand Name",
  tagline = "Tagline",
  size = 'medium',
  orientation = 'horizontal',
  children,
  className,
  brandnameClassName,
  taglineClassName,
  ...props }: BrandingProps) {

  return (
    <Link href="/" className={[styles.link, styles[orientation], className].join(' ')}
      {...props}>
      <figure>
        {children}
        <figcaption>
          <span className={[styles.brandname, brandnameClassName, styles[size]].join(' ')}>{brandname}</span>
          <span className={[styles.tagline, taglineClassName, styles[size]].join(' ')}>{tagline}</span>
        </figcaption>
      </figure>
    </Link>
  )
}