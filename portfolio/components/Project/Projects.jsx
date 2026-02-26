import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  // Sample data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "/placeholder-ecommerce.jpg", // Replace with your actual image path
      technologies: ["Next.js", "TypeScript", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, task assignments, and progress tracking.",
      image: "/placeholder-tasks.jpg", // Replace with your actual image path
      technologies: ["React", "Node.js", "Socket.io"]
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "GPT-powered content creation platform for marketers with customizable templates and SEO optimization.",
      image: "/placeholder-ai.jpg", // Replace with your actual image path
      technologies: ["React", "Python", "OpenAI", "FastAPI"]
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "GPT-powered content creation platform for marketers with customizable templates and SEO optimization.",
      image: "/placeholder-ai.jpg", // Replace with your actual image path
      technologies: ["React", "Python", "OpenAI", "FastAPI"]
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