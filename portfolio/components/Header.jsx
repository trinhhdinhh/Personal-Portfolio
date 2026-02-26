import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
  <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
    <div>
        <Image src={assets.profile_img} alt='' className= 'rounded-full w-32'/>
    </div>
    <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo dark:text-white'>Hello! I&apos;m Trinh Dinh!<Image src={assets.hand_icon} alt='' className= 'rounded-full w-6'/></h3>
    <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo dark:text-white'>Software Engineer Student</h1>
    <p className='max-w-2xl mx-auto font-ovo dark:text-gray-300'>
      I&apos;m a Computer Science student at LSU with a concentration in Software Engineering. I&apos;m seeking software engineering internships and opportunities where I can contribute to impactful products and grow as an engineer.  {/* FINISH DESCRIPTION */}
    </p>
    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
      <a href="#contact" className='px-10 py-3 border-white rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 transition-colors'>Contact Me<Image src={assets.right_arrow_white} alt='' className= 'w-4 dark:invert'/></a>

      <a href="/Spring 2026 Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 dark:border-white bg-white dark:bg-black text-black dark:text-white flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors' >My Resume<Image src={assets.download_icon} alt='' className= 'w-4 dark:invert'/></a> {/* INSERT RESUME HERE */}
    </div>
  </div>
  )
}

export default Header