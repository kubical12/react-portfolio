import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
     <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch </p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/b048fb10-75a3-43ef-8a26-5e23f46f88fc" method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='enter your name'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <input type="text" name='email' placeholder='enter your email '  className='my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                <textarea name="message" rows="10" placeholder="enter your message" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-200'>Let's Start</button>
            </form>
        </div>
     </div>
    </div>
  )
}

export default Contact