import React from 'react'

const ProjectCard = ({title, description, technologies}) => {
  return (
    <div className='group relative bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300'>
      {/* Content Container - Proper padding */}
      <div className='p-6'>
        {/* Title */}
        <h3 className='text-xl font-semibold mb-3 font-ovo'>{title}</h3>

        {/* Description */}
        <p className='text-muted-foreground text-sm mb-4 line-clamp-5 font-ovo'>{description}</p>

        {/* Technology Badges */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 text-sm rounded-full bg-purple-600 text-white font-medium font-ovo'
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