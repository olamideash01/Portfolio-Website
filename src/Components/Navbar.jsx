import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from "motion/react" 

const Navbar = () => {

  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: {
      type: "spring",
       },
      closed: {
        clipPath: "circle(25px at 43px 37px)",
      transition: {
        type: "spring",
        duration: 1,
      }
    },
  };

    const [menu, setMenu]= useState(false);  
    const items = [
        {id:1, text: "About"},
        {id:2, text: "Services"},
        {id:3, text: "Work"},
        {id:4, text: "Contact"},
    ]
  return ( 
    <div>
      <motion.div 
      initial={{opacity:0, y:-100}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.5}}
      className='container mx-auto hidden md:flex justify-between items-center py-6'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-0'>
            <span className='text-white'>BYASH</span>
            <span className='text-purple-500'>THECREATIVE</span> 

        </div>
        <div>
            <ul className="hidden md:flex items-center space-x-6 list-none lg-text-lg md:text-base text-white">
               {items.map(({id, text}) => (
                <li
                    key={id}>{text}</li>
               ))}
            </ul>
        </div >
        <a className='md:text-base lg:text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-full'>Download CV{" "}
          </a> 
      </motion.div>
      <div className='flex md:hidden justify-between '>
        <motion.div
        animate={menu ? "open" : "closed"}
        >
            <motion.div
            variants={variants} 
          
            onClick={() => setMenu((prev) =>  !prev)}
            className='bg-white w-2/3 h-screen text-black fixed z-10'>
                <div className='px-7  py-6'>
                    {menu ? (<IoCloseSharp size={30}/>) :
                    <IoMenuSharp size={30}/>} 
                </div>
                {menu && (
                    <div className='flex flex-col justify-center items-center'>
                        <ul className='space-y-6 text-black text-lg '>
                            {items.map(({id, text}) => (
                              <li
                              className='hover:text-purple-500 duration-200 cursor-pointer'
                             key={id}>{text}
                             </li>
               ))}
                        </ul>
                        <a className='text-lg bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 mt-6 rounded-full '>Download CV</a>
                    </div>
                )}
            </motion.div>
        </motion.div>

        <motion.div 
         initial={{opacity:0, x:100, y:-100}} 
         animate={{opacity:1, x:0, y:0}}
          tranistion={{duration:0.5,}}
         className='text-l font-bold flex items-center gap-2 py-6 px-2'>
          <span className="text-white">BYASH</span>
          <span className="text-purple-500">THECREATIVE</span> 
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
