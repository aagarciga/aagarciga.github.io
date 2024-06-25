"use client"
import { Bars3Icon, CodeBracketSquareIcon, DocumentTextIcon, BriefcaseIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'
import classes from './main-menu.module.css'
import { useState } from 'react'
import { clsx } from 'clsx'
import Branding from './branding'
import Link from 'next/link'


export default function MainMenu() {
  const [isOpened, setIsOpened] = useState(false)
  const toggleHandler = () => {
    console.log('toggle')
    setIsOpened(!isOpened)
  }
  const year = new Date().getFullYear()
  return (
    <nav role='navigation' className={[classes['main-menu'], clsx(isOpened ? classes['active'] : '')].join(' ')} >
      <div className={[classes['main-menu__header']].join(' ')}>
        <button onClick={toggleHandler}
          title='Toggle'
          className={[classes['main-menu__header__btn-toggle']].join(' ')}>
          <Bars3Icon width={24} height={24} color='hsla(var(--color-white-smoke-hsl), 1)' />
        </button>
        <Branding colorMode='dark' className={classes["main-menu__header__branding"]} />
      </div>
      <ul className={[classes['main-menu__Links']].join(' ')}>
        {/* <li>
          <CodeBracketSquareIcon width={24} height={24} color='hsla(var(--color-white-smoke-hsl), 1)' />
          <span>Blog</span>
        </li> */}
        <li className='hover:underline'>
          <Link href={"/resume"} >
            <DocumentTextIcon width={24} height={24} color='hsla(var(--color-white-smoke-hsl, 1)' />
            <span>Resume</span>
          </Link>
        </li>
        {/* <li>
          <BriefcaseIcon width={24} height={24} color='hsla(var(--color-white-smoke-hsl), 1)' />
          <span>Portfolio</span>
        </li>
        <li>
          <ChatBubbleLeftEllipsisIcon width={24} height={24} color='hsla(var(--color-white-smoke-hsl), 1)' />
          <span>Gestbook</span>
        </li> */}

      </ul>
      <footer className={[classes['main-menu__footer']].join(' ')}>
        &copy; {year}
      </footer>
    </nav>
  )
}