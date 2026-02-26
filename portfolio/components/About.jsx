import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo dark:text-gray-300'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo dark:text-white'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 lg:w-96 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
              <p className='mb-10 max-w-2xl font-ovo dark:text-gray-300'>DESCRIPTION</p>
              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description},index)=>(
                  <li className='border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:-translate-y-1 duration-500 hover:shadow-lg dark:bg-gray-800/50' key={index}>
                    <Image src={icon} alt={title} className='w-7 mt-3 dark:hidden'/>
                    <Image src={iconDark} alt={title} className='w-7 mt-3 hidden dark:block'/>
                    <h3 className='my-4 font-semibold text-grey-700 dark:text-white'>{title}</h3>
                    <p className='text-grey-600 dark:text-gray-300 text-sm'>{description}</p>
                  </li>
                ))}
              </ul>
              <h4 className='my-6 text-gray-700 dark:text-gray-300 font-ovo'>Tools I use</h4>
              <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                  <li className='flex items-center justify-center w-12 sm:w-13 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-gray-800/50'key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </div>
  )
}

export default About