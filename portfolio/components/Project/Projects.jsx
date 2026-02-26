import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio website using Next.js and React. Features an interactive timeline showcasing work experiences and education with custom icons, smooth scrolling navigation, project showcase cards with technology badges, and a professional contact section with downloadable resume.",
      image: "/placeholder-portfolio.jpg",
      technologies: ["Next.js", "React", "TailwindCSS", "React Icons"]
    },
    {
      id: 2,
      title: "Finance Tracker App",
      description: "Led cross-functional team as Project Manager, coordinating development milestones and managing Git workflows. Developed a full-stack personal finance tracking application using Flutter and Dart with Firebase backend, featuring real-time transaction monitoring, category-based spending analytics, and income/expense visualization.",
      image: "/placeholder-finance.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Figma"]
    },
    {
      id: 3,
      title: "FSAE Member Portal",
      description: "Architected and developed a comprehensive project management dashboard using React 19, TypeScript, and TailwindCSS, featuring real-time search/filtering, dynamic project cards, and CRUD operations. Integrated and customized 30+ shadcn/ui components with custom LSU branding.",
      image: "/placeholder-fsae.jpg",
      technologies: ["React", "TypeScript", "TailwindCSS", "Radix UI", "Figma"]
    },
    {
      id: 4,
      title: "Interactive World Map",
      description: "Developed an interactive SVG world map with clickable countries displaying real-time details including population, area, capital, languages, currency, and flag information for enhanced geographic learning.",
      image: "/placeholder-map.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "SVG"]
    }
  ]
  return (
    <div id="projects" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>What I have worked on</h4>
        <h2 className='text-center text-5xl font-ovo mb-16'>Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto'>
          {projects.map((project, index)=>{
            return <div key={index}>
              <ProjectCard {...project}/>
            </div>
          })}
        </div>
    </div>
  )
}

export default Projects