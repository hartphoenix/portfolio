import { useState, useEffect } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styles from './App.module.css'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/creative', label: 'Creative' },
  { to: '/social', label: 'Social' },
  { to: '/contact', label: 'Contact' },
] as const

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setMenuOpen(false)

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  return (
    <>
      <div className={styles.bgImage} />
      <a href="#main-content" className={styles.skipLink}>Skip to content</a>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.brand} onClick={closeMenu}>
          <span className={styles.brandAccent}>hart</span> the phoenix
        </NavLink>
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? styles.active : ''}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
