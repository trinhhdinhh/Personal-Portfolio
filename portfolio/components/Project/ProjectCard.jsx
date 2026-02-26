'use client'
import React, { useState } from 'react'

const ProjectCard = ({title, description, technologies}) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressStart = () => {
    setIsPressed(true)
  }

  const handlePressEnd = () => {
    setIsPressed(false)
  }

  return (
    <div
      className='group relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300'
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
    >
      {/* Content Container - Proper padding */}
      <div className='p-6'>
        {/* Title */}
        <h3 className='text-xl font-semibold mb-3 font-ovo dark:text-white'>{title}</h3>

        {/* Description - expands on hover or press */}
        <p className={`text-muted-foreground dark:text-gray-300 text-sm mb-4 font-ovo transition-all duration-300 ${
          isPressed ? 'line-clamp-none' : 'line-clamp-5 group-hover:line-clamp-none'
        }`}>{description}</p>

        {/* Technology Badges */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 text-sm rounded-full bg-purple-600 dark:bg-purple-700 text-white font-medium font-ovo'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard