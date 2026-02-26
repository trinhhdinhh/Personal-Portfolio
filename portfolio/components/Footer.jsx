'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Footer = () => {
  const [pressedLink, setPressedLink] = useState(null)

  return (
    <div className='mt-20'>
        <div className='text-center'>
            <a href="#top">
            <h1 className='text-4xl font-bold cursor-pointer text-black dark:text-white font-ovo mb-2'>Trinh Dinh</h1>
            </a>
            <div className='w-max flex items-center gap-2 mx-auto mt-4 dark:text-gray-300'>
                <Image src={assets.mail_icon} alt='' className='w-6 dark:hidden'/>
                <Image src={assets.mail_icon_dark} alt='' className='w-6 hidden dark:block'/>
                trdinh321@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600 mx-[10%] mt-12 py-6'>
            <p className='dark:text-gray-300'>© 2026 Trinh Dinh. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                  <a
                    target='_blank'
                    href='https://github.com/trinhhdinhh'
                    className={`cursor-pointer dark:text-gray-300 ${
                      pressedLink === 'github' ? 'underline' : 'hover:underline'
                    }`}
                    onTouchStart={() => setPressedLink('github')}
                    onTouchEnd={() => setPressedLink(null)}
                    onMouseDown={() => setPressedLink('github')}
                    onMouseUp={() => setPressedLink(null)}
                    onMouseLeave={() => setPressedLink(null)}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/trinhhdinhh/'
                    className={`cursor-pointer dark:text-gray-300 ${
                      pressedLink === 'linkedin' ? 'underline' : 'hover:underline'
                    }`}
                    onTouchStart={() => setPressedLink('linkedin')}
                    onTouchEnd={() => setPressedLink(null)}
                    onMouseDown={() => setPressedLink('linkedin')}
                    onMouseUp={() => setPressedLink(null)}
                    onMouseLeave={() => setPressedLink(null)}
                  >
                    LinkedIn
                  </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer