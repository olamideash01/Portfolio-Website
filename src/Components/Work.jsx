import React from 'react'
import project1 from "../assets/dashboard.jpg"
import project2 from"../assets/project2.png"
import project3 from "../assets/project3.png"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer";

const Work = () => {
    const projects = [
        {
            id: 1,            
            title: "Avia",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            image: project1,
            link: "#" 
        },
        {
            id: 2,            
            title: "Inventory Tracker",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            image: project2,
            link: "#" 
        },
        {
            id: 3,            
            title: "E-commerce Dashboard",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            image: project3,
            link: "#" 
        },
      ];
  return (
    <div className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> 
        <h2 className='text-4xl text-white underline font-bold text-center mb-12'>My Work</h2>
        <p className='mb-12 text-gray-400 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.            
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            projects.map((project) => (
              <div key={project.id}
              className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
              >
  

                <img src={project.image} alt="" className='w-full h-48 object-cover'/>
                <div className='p-6'>
                  <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                  <p className='text-slate-400 mb-4'>{project.description}</p>
                  <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition '>Details</button>
                </div>
              </div>
            )) 
          }
        </div>
      </div>
    </div>
  )
}

export default Work
