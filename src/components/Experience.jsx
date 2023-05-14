import React from 'react'
import html3 from "../assets/html3.png"
import javscript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import github from '../assets/github.jpeg'
const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html3,
      title: "HTML & CSS",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      src: javscript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 3,
      src: react,
      title: "React",
      style: "shadow-teal-500"
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-teal-500"
    },
    {
      id: 5,
      src: node,
      title: "Node.js",
      style: "shadow-green-500"
    },
    {
      id: 6,
      src: github,
      title: "github",
      style: "shadow-gray-500"
    }
  ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full h-full text-white'>
        <div >
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>these are the technologies ive worked with </p>

        </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {
              tech.map(({id, src, title , style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
              ))
        }
        </div>
       
      </div>
    </div>
  )
}

export default Experience
