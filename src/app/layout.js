import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from "next/font/google"
import Footer from '@/components/Footer'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev | Sebastian Medina',
  description: 'Software developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <Script id="theme-switcher" strategy="beforeInteractive">
        {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
      </Script>
      <Navbar />
        {children}
     
        <Footer />
        </body>
    </html>
  )
}
