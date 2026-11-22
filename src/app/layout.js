import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'
import { Montserrat } from 'next/font/google'
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont', display: 'swap' })
export const metadata = {
  metadataBase: new URL('https://sebastianmedina.vercel.app'),
  title: { default: 'Sebastián Medina | Software Engineer', template: '%s | Sebastián Medina' },
  description: 'Software engineer in Argentina working with React, Next.js, TypeScript, applied AI and systems integration. Financial applications, Amazon Bedrock, n8n and automated testing.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Sebastián Medina | Software Engineer', description: 'Applied AI, financial applications and systems integration.', url: 'https://sebastianmedina.vercel.app', type: 'website', locale: 'en_US' },
  robots: { index: true, follow: true },
}
export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning><body className={`${montserrat.variable} bg-light text-dark dark:bg-dark dark:text-light`}>
    <Script id="theme-switcher" strategy="beforeInteractive">{`try { const mode = localStorage.getItem('theme'); document.documentElement.classList.toggle('dark', mode === 'dark' || (!mode && matchMedia('(prefers-color-scheme: dark)').matches)); } catch {}`}</Script>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Sebastián Nicolás Medina', jobTitle: 'Software Engineer', url: 'https://sebastianmedina.vercel.app', email: 'mailto:snmedina91@gmail.com', sameAs: ['https://github.com/sebapch', 'https://www.linkedin.com/in/snmedina91/'], knowsAbout: ['React', 'Next.js', 'TypeScript', 'Amazon Bedrock', 'Systems integration', 'Automated testing'] }) }} />
    <a href="#main-content" className="skip-link">Skip to content</a><Navbar />{children}<Footer />
  </body></html>
}
