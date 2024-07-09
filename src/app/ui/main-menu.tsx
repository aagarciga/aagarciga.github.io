"use client"
import { Bars3Icon, CodeBracketSquareIcon, DocumentTextIcon, BriefcaseIcon, ChatBubbleLeftEllipsisIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { clsx } from 'clsx'

import Link from 'next/link'
import Brand from './brand'
import styles from './main-menu.module.css'


export default function MainMenu() {
  const [isOpened, setIsOpened] = useState(false)
  const toggleHandler = () => {
    setIsOpened(!isOpened)
  }
  const year = new Date().getFullYear()

  // className={[].join(' ')}
  return (
    <nav role='navigation' className={[styles.menu, clsx(isOpened ? styles.expanded : '')].join(' ')} >
      <header >
        <button onClick={toggleHandler}
          title='Toggle'
          className={styles.toggler}>
          {!isOpened
            ? <Bars3Icon width={24} height={24} />
            : <Bars3CenterLeftIcon width={24} height={24} />
          }
        </button>
        <Brand colorScheme='dark' className={styles.branding} />
      </header>
      <ul className={styles.links}>
        <li>
          <Link href={"/blog"}>
            <CodeBracketSquareIcon width={24} height={24} />
            <span>Blog</span>
          </Link>
          <span className={styles.tooltip}>Blog</span>
        </li>
        <li>
          <Link href={"/resume"}>
            <DocumentTextIcon width={24} height={24} />
            <span>Resume</span>
          </Link>
          <span className={styles.tooltip}>Resume</span>
        </li>
        <li>
          <Link href={"/portfolio"}>
            <BriefcaseIcon width={24} height={24} />
            <span>Portfolio</span>
          </Link>
          <span className={styles.tooltip}>Portfolio</span>
        </li>

        <li>
          <Link href={"/gestbook"}>
            <ChatBubbleLeftEllipsisIcon width={24} height={24} />
            <span>Gestbook</span>

          </Link>
          <span className={styles.tooltip}>Gestbook</span>
        </li>

      </ul>
      <footer>
        &copy; {year}
      </footer>
    </nav>
  )
}