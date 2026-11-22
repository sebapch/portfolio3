'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Experience']]
export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [themeLabel, setThemeLabel] = useState('Switch color theme')
  function toggleTheme() {
    const dark = document.documentElement.classList.toggle('dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
    setThemeLabel(dark ? 'Switch to light theme' : 'Switch to dark theme')
  }
  return <header className="site-header">
    <Link href="/" className="brand" aria-label="Sebastián Medina home">SM<span className="accent">.</span></Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <nav id="site-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href="https://github.com/sebapch" target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
      <a href="https://www.linkedin.com/in/snmedina91/" target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
    </nav>
    <button className="theme-toggle" aria-label={themeLabel} onClick={toggleTheme}><span aria-hidden="true">◐</span></button>
  </header>
}
