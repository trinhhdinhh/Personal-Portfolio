import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { PiGraduationCap } from 'react-icons/pi'

const Experiences = () => {
  // Sample data
  const experiences = [
    {
      id: 1,
      type: "work",
      year: "2022 - Present",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      description: "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      side: "right"
    },
    {
      id: 2,
      type: "education",
      year: "2018 - 2022",
      title: "Bachelor of Computer Science",
      company: "University Name",
      description: "Focused on software engineering, algorithms, and web development. Graduated with honors.",
      skills: ["Data Structures", "Algorithms", "Web Dev", "Databases"],
      side: "left"
    }
  ];

  return (
    <div id="experiences"className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My Journey</h4>
      <h2 className='text-center text-5xl font-ovo'>Experiences</h2>

      <div className='relative px-6 max-w-4xl mx-auto mt-16'>

        {/* Timeline */}
        <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b bg-black md:-translate-x-px'> </div>
        {experiences.map((item, index)=>{
          return <div key ={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index %2 === 0? "md:flex-row-reverse": ""}`}>

          {/* Timeline Node */}
          <div className='absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-black flex items-center justify-center z-10'>
            {item.type === "work" ? (
              <BsBriefcase className='text-black text-sm' />
            ) : (
              <PiGraduationCap className='text-black text-base' />
            )}
          </div>

          {/* Content */}
          <div className='ml-16 md:ml-0 md:w-[calc(50%-2rem)]'>
            <div className='bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300'>
              <div className='flex items-center gap-2 text-sm text-purple-500 mb-2 '>
                <span className='px-3 py-1 rounded-full bg-purple-600/10 font-ovo font-medium'>
                {item.year}
                </span>
              </div>
              <h3 className='text-xl font-ovo font-semibold mb-1'>{item.title}</h3>
              <p className='text-muted-foreground text-sm mb-3 font-ovo'>{item.company}</p>
              <p className='text-muted-foreground text-sm mb-4 font-ovo'>{item.description}</p>
              <div className='flex flex-wrap gap-2'> 
                {item.skills.map((skills)=>{
                  return <span key={skills} className='text-xs px-2 py-1 rounded-md bg-purple-600 text-white'>
                    {skills}
                  </span>
                })}
              </div>
            </div>
          </div>
          <div className='hidden md:block md:w-[calc(50%-2rem)]'></div>
          </div>
        })}
      </div>
    </div>
    
  )
}

export default Experiences