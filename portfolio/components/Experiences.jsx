import React from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { PiGraduationCap } from 'react-icons/pi'

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      year: "Sept 2025 - Present",
      title: "Software Engineer",
      company: "TigerRacing Formula SAE",
      description: "Architected and developed a full-stack member portal serving 50+ engineers across 4 technical divisions, enabling project tracking, resource allocation, and financial management for Formula SAE competition team.",
      skills: ["React", "TypeScript", "TailwindCSS", "Figma"],
      side: "right"
    },
    {
      id: 2,
      type: "work",
      year: "Feb 2025 - Present",
      title: "Audio Visual Technician",
      company: "Louisiana State University ITS",
      description: "Supported 100+ classrooms by setting up and troubleshooting AV systems. Collaborated with technical staff to ensure reliable IT operations for students and faculty.",
      skills: ["Technical Support", "AV Systems", "Troubleshooting", "IT Operations"],
      side: "left"
    },
    {
      id: 3,
      type: "education",
      year: "Aug 2024 - Present",
      title: "B.S Computer Science",
      company: "Louisiana State University",
      description: "Transferred in Fall 2024. Concentrations in Software Engineering & Data Science. GPA: 3.69. Relevant Coursework: Data Structures, Systems Programming, Object-Oriented Design, Operating Systems, Programming Languages.",
      skills: ["Software Engineering", "Data Science", "OOP", "Operating Systems"],
      side: "right"
    },
    {
      id: 4,
      type: "education",
      year: "Aug 2023 - Jul 2024",
      title: "Computer Science",
      company: "University of New Orleans",
      description: "Completed freshman year studying Computer Science before transferring to Louisiana State University. Gained foundational programming skills in Java and version control with Git.",
      skills: ["Java", "Git", "Computer Science Fundamentals"],
      side: "left"
    },
    {
      id: 5,
      type: "work",
      year: "May 2023 - Dec 2025",
      title: "Small Business Owner",
      company: "TNT Nola Detailing",
      description: "Founded and scaled a detailing business serving over 50+ clients. Designed and launched the company website, improving customer engagement and online bookings.",
      skills: ["Entrepreneurship", "Web Development", "Customer Service", "Business Operations"],
      side: "right"
    },
    {
      id: 6,
      type: "work",
      year: "Mar 2023 - May 2024",
      title: "Shift Lead",
      company: "Dough Nguyener's Bakery",
      description: "Delivered fast, friendly, and reliable service in a high-volume bakery. Trained and mentored new servers and baristas on customer service standards. Assisted with daily operations including cash handling, order management, and product knowledge.",
      skills: ["Sales", "Mentoring", "Customer Service", "Team Leadership"],
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