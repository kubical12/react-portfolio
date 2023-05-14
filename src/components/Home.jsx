import React from 'react'
import {MdOutlineKeyboardArrowRight } from "react-icons/md"
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex  items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a full stack web developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
          As a web developer proficient in the MERN stack, I have a keen eye for user experience and design. Using React for front-end development, I create beautiful, responsive UIs that are easy to navigate. For data management, I rely on Express for back-end development and use MongoDB to store all kinds of data. With Node.js, I create scalable applications that are secure, efficient, and perform fast. With a combination of proficiency in the MERN stack and years of coding experience, I am confident in my ability to create dynamic and stunning websites from scratch.
          </p>
        <Link to="portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
          portfolio
          <span className='group-hover:rotate-90 duration-300'>
          <MdOutlineKeyboardArrowRight size={23} />
          </span>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home