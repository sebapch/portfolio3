import Image from 'next/image'
import Link from 'next/link'
import portrait from '../../../public/images/profile/enhanced2.png'

export default function Home() {
  return <main id="main-content" className="page-shell">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Software Engineer · Argentina</p>
        <h1 id="hero-title">Sebastián<br />Nicolás Medina<span className="accent">.</span></h1>
        <h2 className="hero-subtitle">Applied AI &amp; systems integration</h2>
        <p className="intro">I build interfaces that connect financial products, AI services and operational workflows.</p>
        <p className="supporting">Nearly five years at Action Fintech, working with React, Next.js and TypeScript. Hands-on experience with Amazon Bedrock, n8n, REST APIs and automated regression testing.</p>
        <div className="actions"><a className="button" href="/Sebastian-Medina-Resume-EN.pdf" download>Download résumé <span aria-hidden="true">↗</span></a><a className="text-link" href="mailto:snmedina91@gmail.com">Get in touch</a></div>
        <p className="small-links"><a href="/Sebastian-Medina-CV-ES.pdf" download lang="es">CV en español</a><span aria-hidden="true"> / </span><Link href="/projects">Explore my experience</Link></p>
      </div>
      <div className="portrait-frame"><Image src={portrait} alt="Illustrated portrait of Sebastián Medina" priority sizes="(max-width: 767px) 85vw, 35vw" /></div>
    </section>
    <section className="focus-strip" aria-label="Areas of experience"><span>Financial applications</span><span>AI integrations</span><span>API workflows</span><span>Automated testing</span></section>
  </main>
}
