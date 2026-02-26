'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Ovo } from 'next/font/google'

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400']
})

const Navbar = () => {
    const[isScroll, setIsScroll] = useState(false)
    const[isDarkMode, setIsDarkMode] = useState(false)
    const sideMenuRef = useRef();

    function openMenu() {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    // Load saved preference on mount
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode')
        console.log('Saved mode from localStorage:', savedMode)
        if (savedMode === 'true') {
            // Use setTimeout to avoid setState during render
            setTimeout(() => setIsDarkMode(true), 0)
        }
    }, [])

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Apply dark mode when state changes
    useEffect(() => {
        console.log('isDarkMode changed to:', isDarkMode)
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true')
            console.log('Added dark class, HTML classes:', document.documentElement.className)
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false')
            console.log('Removed dark class, HTML classes:', document.documentElement.className)
        }
    }, [isDarkMode])

    const toggleDarkMode = () => {
        console.log('Toggle clicked! Current isDarkMode:', isDarkMode)
        setIsDarkMode(prev => !prev)
    }

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex item-center justify-between z-50 transition-colors duration-200 ${isScroll ? "bg-white dark:bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top" className='mr-14'>
                <h1 className='text-4xl font-bold cursor-pointer text-black dark:text-white font-ovo'>Trinh Dinh</h1>
            </a>
            <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200"}`}>
                <li><a className='font-Ovo dark:text-white' href="#top">Home</a></li>
                <li><a className='font-Ovo dark:text-white' href="#about">About</a></li>
                <li><a className='font-Ovo dark:text-white' href="#experiences">Experiences</a></li>
                <li><a className='font-Ovo dark:text-white' href="#projects">Projects</a></li>
                <li><a className='font-Ovo dark:text-white' href="#contact">Contact Me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button onClick={toggleDarkMode} className='cursor-pointer'>
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-white transition-colors duration-200'>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
                </a>
                <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                    <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>

            {/* ---------- Mobile Menu ---------- */}
            <ul ref ={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-200 dark:bg-gray-900 transition duration-500'>
                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>
                <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#top">Home</a></li>
                <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#about">About</a></li>
                <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#experiences">Experiences</a></li>
                <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#projects">Projects</a></li>
                <li><a className='font-Ovo dark:text-white' onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar