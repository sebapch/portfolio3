'use client'
import React, {useState} from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  
  const router = useRouter()
  

  const handleClick = () =>{
    toggle();
    router.push(href)
  }
  
  return (
    <button href={href} className={`${className} relative group text-dark dark:text-light mx-8 mt-4`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>
        &nbsp;
      </span>
    </button>
  );
};

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base
    
    '>
      <nav className="md:flex items-center flex-row justify-center lg:hidden hidden">
              <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
{/*               <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick} />
 */}            </nav>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg-py-6'>
          
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center lg:py-2'>
               Made with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>by&nbsp;
               <Link href='/' className='underline underline-offset-2' target={"_blank"}>
                Sebastian Medina
                </Link>
            </div>
            <Link href='/' className='underline underline-offset-2'  target={"_blank"}>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer