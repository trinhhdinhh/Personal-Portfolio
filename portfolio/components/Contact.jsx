import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [result, setResult] = useState("")
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2addb6cf-cd65-4311-b215-5fabc6032498");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo dark:text-gray-300'>Connect With Me</h4>
        <h2 className='text-center text-5xl font-ovo dark:text-white'>Get in Touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo dark:text-gray-300'>I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below. </p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white' name='name'/>
            <input type="text" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white' name='email'/>
          </div>
          <textarea rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 dark:text-white mb-6' name='message'></textarea>
          <button
            type='submit'
            className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white dark:text-black rounded-full mx-auto duration-500 ${
              isButtonPressed
                ? 'bg-black dark:bg-white'
                : 'bg-black/80 dark:bg-white/90 hover:bg-black dark:hover:bg-white'
            }`}
            onTouchStart={() => setIsButtonPressed(true)}
            onTouchEnd={() => setIsButtonPressed(false)}
            onMouseDown={() => setIsButtonPressed(true)}
            onMouseUp={() => setIsButtonPressed(false)}
            onMouseLeave={() => setIsButtonPressed(false)}
          >
            Submit now
            <Image src={assets.right_arrow_white} alt='' className='w-4 dark:invert'/>
          </button>
          <p className='mt-4 dark:text-white'>{result}</p>
        </form>
    </div>
  )
}

export default Contact