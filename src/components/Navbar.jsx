import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ({href, title, className=''}) => {
    return(
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href='/' title="home" className='mr-4'/>
            <CustomLink href='/about' title='about' className='mr-4'/>
            <CustomLink href='/projects' title='Projects' className='mr-4'/>
            <CustomLink href='/articles' title='Articles' className='mr-4'/>
        </nav>
        
        <nav>
            <CustomLink href='/' target={"_blank"}>T</CustomLink>
            <CustomLink href='/' target={"_blank"}>T</CustomLink>
            <CustomLink href='/' target={"_blank"}>T</CustomLink>
            <CustomLink href='/' target={"_blank"}>T</CustomLink>
            <CustomLink href='/' target={"_blank"}>T</CustomLink>
            <CustomLink href='/' target={"_blank"}>T</CustomLink>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
        </div>
    </header>
  )
}

export default Navbar