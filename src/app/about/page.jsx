import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
export const metadata = { title: 'About', alternates: { canonical: '/about' } }
export default function About() {
  return <main id="main-content" className="page-shell reading-page"><p className="eyebrow">Background & approach</p><h1>Connecting software<br />to real workflows<span className="accent">.</span></h1>
    <div className="about-intro"><p className="intro">I am a software engineer based in Argentina, with experience across financial applications, applied AI and systems integration.</p><p>At Action Fintech, I work on interfaces that bring together customer accounts, identity verification, AI services and operational tools. My work combines React, Next.js and TypeScript with API integration and automated testing.</p><p>I focus on making complex workflows usable: translating requirements into application behavior, connecting services and handling the states and failures users encounter.</p></div>
    <Experience /><Skills /><Education />
    <p className="contact-line">Let’s connect: <a href="mailto:snmedina91@gmail.com">snmedina91@gmail.com</a></p>
  </main>
}
