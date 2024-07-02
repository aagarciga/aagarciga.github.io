
import { MainMenu } from '../ui'
import styles from './layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <aside>
        <MainMenu />
      </aside>
      {children}
    </div>
  )
}