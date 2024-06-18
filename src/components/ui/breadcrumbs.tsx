import { jost } from '@/app/fonts';
import { clsx } from 'clsx'
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: {
    pathname: string;
  };
  active?: boolean;
}

export default function Breadcrumbs({ breadcrumbs }:
  { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav className='block mb-6' aria-label='Breadcrumb'>
      <ol className={clsx(jost.className, 'flex text-sm md:text-sm')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href.pathname}
            aria-current={breadcrumb.active}
            className={clsx(breadcrumb.active
              ? "text-gray-200 dark:text-gray-950"
              : "text-gunmetal dark:text-white-smoke")}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1
              ? <span className='mx-1 inline-block'>/</span>
              : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}